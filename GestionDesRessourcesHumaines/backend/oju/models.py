from pickle import TRUE
from django.db import models

# Create your models here.

class Diplome(models.Model):
    libele  = models.CharField(max_length=255)

    def __str__(self):
        return self.libele


class Annonce(models.Model):
    titre       = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.titre


class Utilisateur(models.Model):
    nom           = models.CharField(max_length=255)
    prenom        = models.CharField(max_length=255)
    username      = models.CharField(max_length=255)
    email         = models.EmailField()
    sexe          = models.CharField(max_length=255)
    dateNaissance = models.DateField()
    lieuNaissance = models.CharField(max_length=255)
    telephone     = models.IntegerField()
    nationalite   = models.CharField(max_length=255)
    motDePasse    = models.CharField(max_length=255)
    diplomes      = models.ManyToManyField('Diplome',through='DiplomeObtenu')
    annonces      = models.ManyToManyField('Annonce',through='Avis')

    def __str__(self):
        return self.nom + " " + self.prenom


class DiplomeObtenu(models.Model):
    date        = models.DateField()
    lieu        = models.CharField(max_length=255)
    specialite  = models.CharField(max_length=255)
    telLieuDip  = models.CharField(max_length=255)
    utilisateur = models.ForeignKey('Utilisateur',null=True,on_delete=models.SET_NULL)
    diplome     = models.ForeignKey('Diplome',null=True,on_delete=models.SET_NULL)

    def __str__(self):
        return self.specialite


class Avis(models.Model):
    like        = models.CharField(max_length=255)
    commentaire = models.CharField(max_length=255)
    utilisateur = models.ForeignKey('Utilisateur',null=True,on_delete=models.SET_NULL)
    annonce     = models.ForeignKey('Annonce',null=True,on_delete=models.SET_NULL)

    def __str__(self):
        return self.commentaire + " " + self.annonce


class Recherche(models.Model):
    libele      = models.CharField(max_length=255)
    utilisateur = models.ForeignKey('Utilisateur',null=True,on_delete=models.SET_NULL)

    def __str__(self):
        return self.libele


class SituationMatrimoniale(models.Model):
    libele = models.CharField(max_length=255)

    def __str__(self):
        return self.libele   


class MoyenDePaiement(models.Model):
    libele = models.CharField(max_length=255)

    def __str__(self):
        return self.libele


class TypeContrat(models.Model):
    libele = models.CharField(max_length=255)

    def __str__(self):
        return self.libele


class GrilleSalariale(models.Model):
    experience     = models.CharField(max_length=255)
    tauxHoraire    = models.IntegerField()
    tauxMensuel    = models.IntegerField()
    pause          = models.IntegerField()
    salaireDeBase  = models.IntegerField()
    primeLogement  = models.IntegerField()
    primeTransport = models.IntegerField()
    primeAncien    = models.IntegerField()
    indenminite    = models.IntegerField()
    avantageNature = models.CharField(max_length=255)


class Entreprise(models.Model):
    nom          = models.CharField(max_length=255)
    prenom       = models.CharField(max_length=255)
    emailPro     = models.CharField(max_length=255)
    nomEntreprise = models.CharField(max_length=255) 
    adresse      = models.CharField(max_length=255)
    effectif     = models.IntegerField()
    telephone    = models.IntegerField()
    
    def __str__(self):
        return self.nomEntrprise


class Departement(models.Model):
    nom         = models.CharField(max_length=255)
    description = models.TextField()
    
    def __str__(self):
        return self.nom


class Service(models.Model):
    nom         = models.CharField(max_length=255)
    description = models.TextField()
    departement = models.ForeignKey('Departement',null=True,on_delete=models.SET_NULL)
    
    def __str__(self):
        return self.nom


class Poste(models.Model):
    nom             = models.CharField(max_length=255)
    description     = models.TextField()
    typeContrat     = models.ForeignKey('TypeContrat',null=True,on_delete=models.SET_NULL)
    grilleSalariale = models.ForeignKey('GrilleSalariale',null=True,on_delete=models.SET_NULL)
    service         = models.ForeignKey('Service',null=True,on_delete=models.SET_NULL)
    
    def __str__(self):
        return self.nom


class Employe(Utilisateur):
    adresse               = models.CharField(max_length=255)
    numero_cnss           = models.CharField(max_length=255)
    nombre_enfant         = models.IntegerField()
    dateEmbauche          = models.DateField()
    congeConsomme         = models.IntegerField()
    superviseur           = models.CharField(max_length=255,null=True)
    personneUrgence       = models.CharField(max_length=255)
    telephoneUrgence      = models.IntegerField()
    photo                 = models.FileField(upload_to='photos')
    moyenDePaiement       = models.ForeignKey('MoyenDePaiement',null=True,on_delete=models.SET_NULL)
    situationMatrimoniale = models.ForeignKey('SituationMatrimoniale',null=True,on_delete=models.SET_NULL)
    postes                = models.ManyToManyField('Poste',through='Duree')

    def __str__(self):
        return self.nom + " " + self.prenom


class Duree(models.Model):
    dateDebutContrat = models.DateField()
    dateFinContrat   = models.DateField()
    poste            = models.ForeignKey('Poste',null=True,on_delete=models.SET_NULL)
    employe          = models.ForeignKey('Employe',null=True,on_delete=models.SET_NULL)


class DossierFamiliaux(models.Model):
    acteNaissanceEnfant    = models.FileField(upload_to='fichiers')
    acteNaissanceConjointe = models.FileField(upload_to='fichiers')
    acteMariage            = models.FileField(upload_to='fichiers')
    employe                = models.ForeignKey('Employe',null=True,on_delete=models.SET_NULL)


class Motif(models.Model):
    libele = models.CharField(max_length=255)

    def __str__(self):
        return self.libele  


class Demande(models.Model):
    message   = models.TextField()
    estTraite = models.BooleanField()
    date      = models.DateField()
    motif     = models.ForeignKey('Motif',null=True,on_delete=models.SET_NULL)
    employe   = models.ForeignKey('Employe',null=True,on_delete=models.SET_NULL)

    def __str__(self):
        return self.message


class Retrait(models.Model):
    statut        = models.BooleanField()
    date          = models.DateField()
    montantRetire = models.IntegerField()
    employe       = models.ForeignKey('Employe',null=True,on_delete=models.SET_NULL)


class FicheDePaie(models.Model):
    dateDebutPeriode       = models.DateField()
    dateFinPeriode         = models.DateField()
    datePaiement           = models.DateField(null=True)
    nombreDeJourTravaille  = models.IntegerField()
    salaireBrut            = models.IntegerField()
    brutImposable          = models.IntegerField()
    brutArrondi            = models.IntegerField()
    cnss                   = models.IntegerField()
    ipts                   = models.IntegerField()
    deductionObligatoire   = models.IntegerField(null=True)
    accompte               = models.IntegerField(null=True)
    oppositionSaisie       = models.IntegerField(null=True)
    deductionFacultative   = models.IntegerField(null=True)
    salaireNet             = models.IntegerField()
    employe                = models.ForeignKey('Employe',null=True,on_delete=models.SET_NULL)


class HeureSupplementaire(models.Model):
    date                    = models.DateField()
    heureSupplementaireJour = models.IntegerField()
    heureSupplementaireNuit = models.IntegerField()
    employe                 = models.ForeignKey('Employe',null=True,on_delete=models.SET_NULL)





