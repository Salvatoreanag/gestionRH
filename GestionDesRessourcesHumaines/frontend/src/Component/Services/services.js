import React from "react";
import './services.css';
// import '../styles.css';

export default class Services extends React.Component{
    render(){
        return(
            <section className="page-section" id="services">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Services</h2>
                    <h3 className="section-subheading text-muted">Découvrez ci-dessous nos différentes offres de prestations.</h3>
                </div>
                <div className="row text-center">
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-hands-helping fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3 puces" >Recrutement</h4>
                        <p className="text-muted">
                                <li className="spacing">Planifiez des entretiens d'embauche en fonction du processus décisionnel</li>
                                <li className="spacing">Facilitez le recrutement en simplifiant le processus de collecte des CV et en examinant les données des candidats</li>              
                                <li className="spacing">Gérez les candiadatures avec évaluation des compétences à l'issue des entretiens</li>

                            </p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-coins fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3 puces">Paie & Rémunération</h4>
                        <p className="text-muted">
                            <li className="spacing">Centralisez vos données de paie</li>              
                            <li className="spacing">Suivez l'évolution de la masse salariale grâce aux historiques de rémunération (salaires,primes)</li>
                            <li className="spacing">Economisez en numérisant vos bulletins de paie</li>
                            <li className="spacing">Recevez des notifications lors des modifications ou nouveautés concernant vos fiches de paie</li>

                        </p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-building fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3 puces" >Organisation de l'entreprise</h4>
                        <p className="text-muted">
                            <li className="spacing">Gérez plus efficacement les services et départements de votre entreprise</li>
                            <li className="spacing">Gérez toutes les données administratives dématérialisées de vos employés</li>
                            <li className="spacing">Ayez une visibilité sur l'avancement des tâches et la productivité des différents services de votre entreprise</li>              

                        </p>
                      
                    </div>
                </div>

                <div className="row text-center">
                    <div className="col-md-2"></div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-sack-dollar fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3 puces" >Gérer son salaire</h4>
                        <p className="text-muted">
                                <li className="spacing">Faites de l'épargne</li>              
                                <li className="spacing">Investissez dans des projets</li>

                            </p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-person-chalkboard  fa-stack-1x fa-inverse" ></i>
                        </span>
                        <h4 className="my-3 puces">Formations</h4>
                        <p className="text-muted">
                            <li className="spacing" >Identifiez les besoins de formation</li>
                            <li className="spacing" >Mettez en ligne et suivez des formations dans divers domaines</li>
                            <li className="spacing" >Evaluez les compétences acquises</li>
                    </p>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </section>
        )
    }
}