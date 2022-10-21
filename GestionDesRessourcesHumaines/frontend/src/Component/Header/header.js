import React from "react";
import './header.css';
// import Navbar from '../Navbar/navbar'
import Carrousel from "../Carrousel/carrousel";

export default class Headers extends React.Component{
    render(){
        return(
            <div>
                {/* <Navbar /> */}
                <header className="masthead">
                    <div className="container">
                        <div className="masthead-subheading">BIENVENUE À GNB</div>
                            <a className="btn btn-primary btn-xl text-uppercase" href="#services">En savoir plus</a>
                        </div>
                        <Carrousel />
                         {/*<Services />
                        <Profils />
                        <About />
                        <Team />
                        <Logos />
                        <Contact /> */}
                 </header>
            </div>
            
        )
    }
}