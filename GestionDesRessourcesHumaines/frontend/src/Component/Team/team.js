import React from "react";
import './team.css';

export default class Team extends React.Component{
    render(){
        return(
            <section className="page-section bg-light" id="team">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">NOTRE ÉQUIPE </h2>
                </div>
                <div className="row">
                    <div className="col-lg-3"></div>

                    <div className="col-lg-3">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src="IMG_1635.JPG" alt="..." />
                            <h4 className="texte">Elvira Ornellia HOUEDAN </h4>
                            <p className="text-muted">Etudiante en licence 2 d'Informatique de Gestion</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Houedan Twitter Profile"><i className="fab fa-telegram"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Houedan Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Houedan LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src="adrien.jpg" alt="..." />
                            <h4>Yélian Silvère ANAGONOU</h4>
                            <p className="text-muted">Etudiant en licence 2 d'Informatique de Gestion</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i className="fab fa-telegram"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i className="fab fa-whatsapp"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
                {/* <div className="row">
                    <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                </div> */}
            </div>
        </section>
        )
    }
}