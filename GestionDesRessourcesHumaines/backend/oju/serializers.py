from rest_framework import serializers  
from .models import Utilisateur,Diplome,Annonce,DiplomeObtenu,Recherche,Avis,Motif
from .models import TypeContrat,GrilleSalariale,Entreprise,Departement,Service
from .models import Demande,Retrait,FicheDePaie,MoyenDePaiement,Duree,Poste,Employe
from .models import SituationMatrimoniale,DossierFamiliaux,HeureSupplementaire
# On crée les class serializers

class DiplomeSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Diplome
        fields = ('id','libele') 


class AnnonceSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Annonce
        fields = ('id','titre','description') 


class UtilisateurSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Utilisateur
        fields = ('id','nom','prenom','username','email','sexe','dateNaissance','lieuNaissance','telephone','nationalite','diplomes','motDePasse') 


class DiplomeObtenuSerializer(serializers.ModelSerializer):
    class Meta:
        model  = DiplomeObtenu
        fields = ('id','date','lieu','specialite','telLieuDip','utilisateur','diplome') 


class AvisSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Avis
        fields = ('id','like','commentaire','utilisateur','annonce') 


class RechercheSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Recherche
        fields = ('id','libele','utilisateur') 


class SituationMatrimonialeSerializer(serializers.ModelSerializer):
    class Meta:
        model  = SituationMatrimoniale
        fields = ('id','libele') 


class MoyenDePaiementSerializer(serializers.ModelSerializer):
    class Meta:
        model  = MoyenDePaiement
        fields = ('id','libele') 


class TypeContratSerializer(serializers.ModelSerializer):
    class Meta:
        model  = TypeContrat
        fields = ('id','libele') 


class GrilleSalarialeSerializer(serializers.ModelSerializer):
    class Meta:
        model  = GrilleSalariale
        fields = ('id','experience','tauxHoraire','tauxMensuel','pause','salaireDeBase','primeLogement','primeTransport','primeAncien','indenminite','avantageNature') 


class EntrepriseSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Entreprise
        fields = ('id','nom','prenom','emailPro','nomEntreprise','adresse','effectif','telephone') 


class DepartementSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Departement
        fields = ('id','nom','description',) 


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Service
        fields = ('id','nom','description','departement') 


class PosteSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Poste
        fields = ('id','nom','description','typeContrat','grilleSalariale','service') 


class EmployeSerializer(serializers.ModelSerializer):
    utilisateur_ptr = UtilisateurSerializer()
    class Meta:
        model  = Employe
        fields = ('utilisateur_ptr','adresse','numero_cnss','nombre_enfant','dateEmbauche','congeConsomme','superviseur','personneUrgence','telephoneUrgence','photo','moyenDePaiement') 


class EmployeGPSerializer(serializers.ModelSerializer):   # Cette class est créée pour afficher specifiquement ces champ sur le dashbord du GP
    #utilisateur_ptr = UtilisateurSerializer()
    class Meta:
        model  = Employe
        fields = ('id','nom','prenom','username','email','telephone')


class DureeSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Duree
        fields = ('id','dateDebutContrat','dateFinContrat','poste','employe') 


class DossierFamiliauxSerializer(serializers.ModelSerializer):
    class Meta:
        model  = DossierFamiliaux
        fields = ('id','acteNaissanceEnfant','acteNaissanceConjointe','acteMariage','employe',) 


class MotifSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Motif
        fields = ('id','libele') 


class DemandeSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Demande
        fields = ('id','message','date','motif','employe') 


class RetraitSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Retrait
        fields = ('id','date','montantRetire','employe') 


class FicheDePaieSerializer(serializers.ModelSerializer):
    class Meta:
        model  = FicheDePaie
        fields = ('id','dateDebutPeriode','dateFinPeriode','datePaiement','nombreDeJourTravaille','salaireBrut','brutImposable','brutArrondi','cnss','ipts','deductionObligatoire','accompte','oppositionSaisie','deductionFacultative','salaireNet','employe') 


class HeureSupplementaireSerializer(serializers.ModelSerializer):
    class Meta:
        model  = HeureSupplementaire
        fields = ('id','date','heureSupplementaireJour','heureSupplementaireNuit','employe') 
        
