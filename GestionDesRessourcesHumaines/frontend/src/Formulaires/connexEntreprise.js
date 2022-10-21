import React from "react";
// import Carrousel from "../Component/Carrousel/carrousel";
import './connexEntreprise.css';
// import '../Component/styles.css';

export default class Entreprise extends React.Component{
    render(){
        return(
            <div className="h-100 gradient-form">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-12">
                            <div className="card rounded-3 text-black">
                                <div className="row g-0">
                                    <div className="col-lg-10">
                                        <div className="card-body p-md-5 mx-md-4">
                                            <div className="text-center">
                                                <img src="logo_sansfond.png" className="taille_image" alt="logo"/>
                                            </div>
                                            <div className="text-center">                                          
                                                <div >
                                                    <h4  >Prêt à passer à l'ère du digital pour vos RH? </h4>  
                                                </div>
                                                <div>
                                                    {/* <Carrousel /> */}
                                                </div>
                                                
                                            </div>
                                            <div>
                                                <button className="btn btn-primary btn-block fa-lg fond_bleu" type="button">ESSAI GRATUIT</button><br/><br/>
                                            </div>
                   
                                            <div className="d-flex align-items-center justify-content-center pb-4">
                                                <button type="button" className="boutons  text-black"  value="Submit">S'abonner</button>
                                            </div>
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