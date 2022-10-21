#from django.shortcuts import render
from rest_framework import viewsets,permissions

from .serializers import DiplomeSerializer,AnnonceSerializer,UtilisateurSerializer
from .serializers import DiplomeObtenuSerializer,AvisSerializer,RechercheSerializer
from .serializers import SituationMatrimonialeSerializer, MoyenDePaiementSerializer
from .serializers import TypeContratSerializer,EntrepriseSerializer,DepartementSerializer
from .serializers import GrilleSalarialeSerializer,ServiceSerializer,PosteSerializer
from .serializers import EmployeSerializer,DureeSerializer,DossierFamiliauxSerializer
from .serializers import MotifSerializer,DemandeSerializer,RetraitSerializer
from .serializers import FicheDePaieSerializer,HeureSupplementaireSerializer
from .serializers import EmployeGPSerializer

from .models import Utilisateur,Diplome,Annonce,DiplomeObtenu,Recherche,Avis,Motif
from .models import TypeContrat,GrilleSalariale,Entreprise,Departement,Service
from .models import Demande,Retrait,FicheDePaie,MoyenDePaiement,Duree,Poste,Employe
from .models import SituationMatrimoniale,DossierFamiliaux,HeureSupplementaire

# Create your views here.

class DiplomeView(viewsets.ModelViewSet):
    serializer_class = DiplomeSerializer                                                    # On crée une classe serializer et on lui attribue la class DiplomeSerializer
    queryset         = Diplome.objects.all()                                                # On définie une variable et on le peuple avec tous les listes d'objets du modèle Diplome
    
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]    # On définie les droits d'accès aux objets de la class


class AnnonceView(viewsets.ModelViewSet):
    serializer_class = AnnonceSerializer 
    queryset         = Annonce.objects.all()

    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class UtilisateurView(viewsets.ModelViewSet):
    serializer_class = UtilisateurSerializer 
    queryset         = Utilisateur.objects.all()

    #permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class DiplomeObtenuView(viewsets.ModelViewSet):
    serializer_class = DiplomeObtenuSerializer
    queryset         = DiplomeObtenu.objects.all()

    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class AvisView(viewsets.ModelViewSet):
    serializer_class = AvisSerializer
    queryset         = Avis.objects.all()

    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class RechercheView(viewsets.ModelViewSet):
    serializer_class = RechercheSerializer
    queryset         = Recherche.objects.all()

    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class SituationMatrimonialeView(viewsets.ModelViewSet):
    serializer_class = SituationMatrimonialeSerializer
    queryset         = SituationMatrimoniale.objects.all()

    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class MoyenDePaiementView(viewsets.ModelViewSet):
    serializer_class = MoyenDePaiementSerializer 
    queryset         = MoyenDePaiement.objects.all()

    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class TypeContratView(viewsets.ModelViewSet):
    serializer_class = TypeContratSerializer
    queryset         = TypeContrat.objects.all()

    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class GrilleSalarialeView(viewsets.ModelViewSet):
    serializer_class = GrilleSalarialeSerializer
    queryset         = GrilleSalariale.objects.all()

    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class EntrepriseView(viewsets.ModelViewSet):
    serializer_class = EntrepriseSerializer 
    queryset         = Entreprise.objects.all()

    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class DepartementView(viewsets.ModelViewSet):
    serializer_class = DepartementSerializer
    queryset         = Departement.objects.all()

    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class ServiceView(viewsets.ModelViewSet):
    serializer_class = ServiceSerializer 
    queryset         = Service.objects.all()

    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class PosteView(viewsets.ModelViewSet):
    serializer_class = PosteSerializer
    queryset         = Poste.objects.all()

    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class EmployeView(viewsets.ModelViewSet):
    serializer_class = EmployeSerializer
    queryset         = Employe.objects.all()

    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_serializer_class(self):
        if self.action == 'list':
            return EmployeGPSerializer
        return self.serializer_class

class DureeView(viewsets.ModelViewSet):
    serializer_class = DureeSerializer
    queryset         = Duree.objects.all()

    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class DossierFamiliauxView(viewsets.ModelViewSet):
    serializer_class = DossierFamiliauxSerializer
    queryset         = DossierFamiliaux.objects.all()

    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class MotifView(viewsets.ModelViewSet):
    serializer_class = MotifSerializer
    queryset         = Motif.objects.all()

    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class DemandeView(viewsets.ModelViewSet):
    serializer_class = DemandeSerializer
    queryset         = Demande.objects.all()

    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class RetraitView(viewsets.ModelViewSet):
    serializer_class = RetraitSerializer
    queryset         = Retrait.objects.all()

    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class FicheDePaieView(viewsets.ModelViewSet):
    serializer_class = FicheDePaieSerializer
    queryset         = FicheDePaie.objects.all()

    #permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class HeureSupplementaireView(viewsets.ModelViewSet):
    serializer_class = HeureSupplementaireSerializer
    queryset         = HeureSupplementaire.objects.all()

    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

