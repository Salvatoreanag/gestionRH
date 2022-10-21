import React from "react";
import Entreprise from "../../Formulaires/connexEntreprise";
import Connexion from "../../Formulaires/connexion";
import Employe from "../../Formulaires/employe";
import './profils.css';


export default class Profils extends React.Component{
    render(){
        return(
            <div>
                <section className="page-section bg-light" id="portfolio">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Profils</h2>
                        </div>
                        <div className="row">

                            <div className="col-lg-4 col-sm-6 mb-4">

                        {/* Profil 1: Employé */}

                                <div className="portfolio-item">
                                    <div>
                                        <img className="img-fluid profil" src="employe.jpg" alt="..." />
                                    </div>
                                    <div className="portfolio-caption portfolio-link">
                                        <div className="portfolio-caption-heading ">
                                            <a className="decoration" href="#portfolioModal1" data-bs-toggle="modal"> Employé</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6 mb-4">

                        {/* Profil 2: Entreprise */}

                                <div className="portfolio-item">
                                    <div>
                                        <img className="img-fluid" src="entreprise.jpg" alt="..." />
                                    </div>
                                    <div className="portfolio-caption portfolio-link">
                                        <div className="portfolio-caption-heading">
                                            <a className="decoration" data-bs-toggle="modal" href="#portfolioModal2">Entreprise</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6 mb-4">

                        {/* Profil 3 : Particulier */}

                                <div className="portfolio-item">
                                    <div>
                                        <img className="img-fluid" src="particulier.jpg" alt="..." />
                                    </div>
                                    <div className="portfolio-caption portfolio-link">
                                        <div className="portfolio-caption-heading">
                                            <a className="decoration" data-bs-toggle="modal" href="#portfolioModal3">Particulier</a> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                 {/* <!--Détails du profil employé--> */}
                <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-sm" >
                        <div className="modal-content">
                            <div className="close-modal" data-bs-dismiss="modal"><img src="close-icon.svg" alt="Close modal" /></div>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-10">
                                        <div className="modal-body">

                                            <Employe />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        {/* <!-- Détails du profil entreprise--> */}
                <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog model">
                        <div className="modal-content">
                            <div className="close-modal" data-bs-dismiss="modal"><img src="close-icon.svg" alt="Close modal" /></div>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-10">
                                        <div className="modal-body">
                                            <Entreprise />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        {/* <!--Détails du profil particulier--> */}

                <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="close-modal" data-bs-dismiss="modal"><img src="close-icon.svg" alt="Close modal" /></div>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-10">
                                        <div className="modal-body">
                                            <Connexion />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}