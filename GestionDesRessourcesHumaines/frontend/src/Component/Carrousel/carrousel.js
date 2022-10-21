import React from "react";
import './carrousel.css';
// import '../styles.css';

export default class Carrousel extends React.Component{
    render(){
        return(
            <div className="cadre">
                
                    <div className="centre">
    
                        <div className="carousel">
        
                            <div className="changeHidden"> {/*Pour cacher le texte derrière*/}
    
                                <div className="contenant">
                                    <div className="element">Découvrez des <span className="rouge">talents</span></div>
                                    <div className="element">Perfectionnez <span className="rouge">vous</span></div>
                                    <div className="element">La GRH <span className="rouge">autrement</span></div>
                                    <div className="element">Apprenez <span className="rouge">mieux</span></div>

                                </div>
    
                             </div>
    
                        </div>
    
                    </div>
                </div>
        )
    }
}