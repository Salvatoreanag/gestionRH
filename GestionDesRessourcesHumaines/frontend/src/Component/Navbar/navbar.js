import React from "react";
import Headers from "../Header/header";
import {Link } from "react-router-dom";
// import { Nav} from "react-bootstrap";
import Services from '../Services/services';
import Profils from '../Profils/profils';
import About from '../About/about';
import Team from '../Team/team';
import Logos from '../Logos/logos';
import Contact from '../Contact/contact';
 

import './navbar.css'


function Navbar() {
    
        return(
            <div id='page-top' >
               <nav className="navbar navbar-expand-lg navbar-dark fixed-top " id="mainNav">
                <div className="container">
                    <a className="navbar-brand bord" href="#page-top"><img src="logo_sansfond.png" className="dimension" alt="..." /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars ms-1"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                            <li className="nav-item"><a className="nav-link" href="#page-top">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
                            <li className="nav-item"><a className="nav-link" href="#portfolio">Profils</a></li>
                            <li className="nav-item"><a className="nav-link" href="#about">À propos</a></li>
                            <li className="nav-item"><a className="nav-link" href="#team">Equipes</a></li>
                            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                            <li className="nav-item"><Link className="nav-link" to="/Inscription">Inscription</Link></li>


                        </ul>
                    </div>
                </div>
            </nav>
                <Headers />
               
                <Services />
                <Profils />
                <About />
                <Team />
                <Logos />
                <Contact />   
                 
            </div> 
                
            )
}


export default Navbar