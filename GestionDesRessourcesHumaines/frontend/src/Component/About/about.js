import React from "react";
import './about.css'  ;

export default class About extends React.Component{
    render(){
        return(
            <section className="page-section" id="about">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">À PROPOS</h2>
                    <h3 className="section-subheading text-muted">Découvrez notre entreprise</h3>
                </div>
                <ul className="timeline">
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="qui sommes-nous.jpg" alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                {/* <h4>QUI SOMMES-NOUS?</h4> */}
                                <h4 className="subheading">Qui sommes-nous</h4>
                            </div>
                            <div className="bleu">
                                <p className="text-muted"><span className="orange">GNBODAS</span> est une entreprise de communication qui est
                                    née d'un projet de <span className="orange">FASHION HOUSE</span>  et avec l'ambition d'installer une industrie
                                    cinématographique <span className="orange">BENIMOOD</span> et une plateforme technologique hors pair <span className="orange">DREAM</span> , GNBODAS regroupe l’ensemble des
                                     compétences nécessaires dans chacun de ces domaines dans le seul but de propulser nospartenaires et les 
                                     accompagner dans leur réussite.
                                </p>
                            </div>    
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="visions.jpg" alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4 className="subheading">Notre vision</h4>
                            </div>
                            <div className="timeline-body">
                                <p className="text-muted">Parce que nous croyons au potentiel incroyable de l'Afrique, du Bénin, en nos
                                    valeurs et en notre identité culturelle, nous sommes convaincus que l'Afrique est capable
                                    de sublimer le monde et d'installer un écosystème défiant toutes les possibilités.
                                    Nous croyons que la communication est la plus grande arme d'expansion
                                    économique, elle transcende la matière pour toucher l'âme. Toute entreprise ambitieuse
                                    avec une vision claire et précise est capable d'atteindre une dimension inestimable sur
                                    l'échiquier international.
                                    <span className="orange">L'industrie de la mode</span>,<span className="orange">du cinéma</span>,<span className="orange">de l'art</span> et de <span className="orange">la culture</span> pour une expansion fulgurante.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="missions.jpg" alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4 className="subheading ">Notre mission</h4>
                            </div>
                            <div className="timeline-body">
                                <p className="text-muted">
                                <span className="orange">Concevoir</span>,<span className="orange">Développer</span> et <span className="orange">Mettre en place</span> des solutions personnalisées pour
                                    accompagner nos partenaires au succès dans tous leurs projets grâce à notre nouvelle
                                    vision en communication.
                                    Relier nos partenaires pour installer un climat collaboration mutuelle et durable.
                                </p>
                            </div>
                        </div>
                    </li>
                    {/* <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="4.jpg" alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>July 2020</h4>
                                <h4 className="subheading">Phase Two Expansion</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li> */}
                    <li className="timeline-inverted">
                        <div className="timeline-image">
                            <h4 >
                                Faîtes partie
                                <br />
                                De Notre
                                <br />
                                Histoire!
                            </h4>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        )
    }
}