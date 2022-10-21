"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from oju import views
from rest_framework import routers
from django.conf.urls.static import static
from django.conf import settings

# On crée un objet router
router = routers.DefaultRouter()

# On enrégistre les routeurs
router.register(r'diplome',views.DiplomeView,'diplome')
router.register(r'annonce',views.AnnonceView,'annonce')
router.register(r'utilisateur',views.UtilisateurView,'utilisateur')
router.register(r'diplomeobtenu',views.DiplomeObtenuView,'diplomeobtenu')
router.register(r'avis',views.AvisView,'avis')
router.register(r'recherche',views.RechercheView,'recherche')
router.register(r'matrimoniale',views.SituationMatrimonialeView,'matrimoniale')
router.register(r'paiement',views.MoyenDePaiementView,'paiement')
router.register(r'contrat',views.TypeContratView,'contrat')
router.register(r'salaire',views.GrilleSalarialeView,'salaire')
router.register(r'entreprise',views.EntrepriseView,'entreprise')
router.register(r'departement',views.DepartementView,'departement')
router.register(r'service',views.ServiceView,'service')
router.register(r'poste',views.PosteView,'poste')
router.register(r'employe',views.EmployeView,'employe')
router.register(r'duree',views.DureeView,'duree')
router.register(r'famille',views.DossierFamiliauxView,'famille')
router.register(r'motif',views.MotifView,'motif')
router.register(r'demande',views.DemandeView,'demande')
router.register(r'retrait',views.RetraitView,'retrait')
router.register(r'paie',views.FicheDePaieView,'paie')
router.register(r'heuresup',views.HeureSupplementaireView,'heuresup')



urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls))                                                # ça permet de router sur Django rest framework
] + static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)  # On l'ajoute si on a des fichiers à récupérer
