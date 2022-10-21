#On va lister tous les modèles qui doivent être gérés par l'interface d'administration
from django.contrib import admin
from .models import Utilisateur,Diplome,Annonce,DiplomeObtenu,Recherche,Avis,Motif
from .models import TypeContrat,GrilleSalariale,Entreprise,Departement,Service
from .models import Demande,Retrait,FicheDePaie,MoyenDePaiement,Duree,Poste,Employe
from .models import SituationMatrimoniale,DossierFamiliaux,HeureSupplementaire

# Register your models here.
admin.site.register(Utilisateur)
admin.site.register(Diplome)
admin.site.register(Annonce)
admin.site.register(DiplomeObtenu)
admin.site.register(Recherche)
admin.site.register(Avis)
admin.site.register(SituationMatrimoniale)
admin.site.register(TypeContrat)
admin.site.register(GrilleSalariale)
admin.site.register(Entreprise)
admin.site.register(Departement)
admin.site.register(Service)
admin.site.register(Employe)
admin.site.register(DossierFamiliaux)
admin.site.register(Motif)
admin.site.register(Demande)
admin.site.register(Retrait)
admin.site.register(FicheDePaie)
admin.site.register(HeureSupplementaire)
admin.site.register(MoyenDePaiement)
admin.site.register(Duree)
admin.site.register(Poste)