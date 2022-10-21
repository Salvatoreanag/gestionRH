import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import './connexion.css'
import { Link } from "react-router-dom";

export default class Connexion extends React.Component{

render(){

    return(      
            <div className="h-75 gradient-form">
                <div className="container h-75">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-12">
                            <div className="card rounded-3 text-black">
                                <div className="row g-0">
                                    <div className="col-lg-6">
                                        <div className="card-body p-md-5 mx-md-4">

                                            <div className="text-center">
                                                <img src="logo_sansfond.png" className="taille_image" alt="logo"/>
                                            </div>

                         {/* <!-- Formulaire de connexion --> */}

                                            <form>                                          
                                                <div className="form-outline mb-4">
                                                    <label className="form-label" >Email</label><br/>
                                                    <input type="email" placeholder="Entrez votre email" className="form-control bordure taille_input" />
                                                </div>
                    
                                                <div className="form-outline mb-4">
                                                    <label className="form-label">Password</label><br/>
                                                    <input type="password" placeholder="Entrez votre mot de passe" className="form-control bordure taille_input" />
                                                </div>

                                                <div className="text-center pt-1 mb-5 pb-1">
                                                    <button className=" btn btn-primary btn-block fa-lg fond_bleu bordure " type="button"  >Se connecter</button><br/>
                                                    <a className="text-muted" href="#!">Mot de passe oublié?</a>
                                                </div>
                        
                                                 <div className="d-flex align-items-center justify-content-center pb-4">
                                                    <p className="mb-0 me-2">Vous n'avez pas de compte?</p>
                                                    <Link to='/Inscription'><button type="button" className="boutons" >Inscrivez-vous</button></Link>

                                                </div>
                        
                                            </form>
                        
                                        </div>
                                    </div>

                                    <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                            <h4 className="mb-4">Bienvenue à Global Network Business </h4>
                                            <h5><p>Utilisez notre logiciel pour:</p></h5>
                                            <ul>
                                                <li className="liste">faire des recherches d'emplois</li>
                                                <li className="liste">suivre des formations</li>
                                                <li className="liste">postuler pour des offres d'emplois</li>
                                            </ul>
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