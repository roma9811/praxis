import "./MainThree.css";
import Arzt from "../../Assets/Logo/arzt.png";
import Arzt_Photo1 from "../../Assets/Praxis-images/1.jpg";
import Arzt_Photo2 from "../../Assets/Praxis-images/2.jpg";

export const MainComponentThree = () => {
    return (
        <div className="main__three">
            <div className="container">
                <div className="ärzte__header">
                    <img src={Arzt} alt="arzt__logo" width={30} />
                    <h1>Unsere Ärzte</h1>
                </div>

                <div className="arzt__container">

                    {/* Arzt One */}
                    <div className="arzt__one">
                        <img src={Arzt_Photo2} alt="Dr. Kathrin Sander" />
                        <div className="arzt__box">
                            <h2>Dr. med. Kathrin Sander</h2>
                            <h3>Fachärztin für Allgemeinmedizin</h3>
                            <p>
                                <span>Ich </span>studierte Medizin an der Universität des Saarlandes und in meiner Heimatstadt Heidelberg, 
                                wo ich bei Rudolph Virchow promovierte.
                            </p>
                            <p>
                               <span> Medizinhistorische</span> Themen und Sprache interessierten mich schon immer. Deshalb habe ich 
                                neben der Medizin auch Geschichte und Germanistik studiert (Abschluss Magister Artium).
                            </p>
                            <p>
                               <span> Während</span> meiner ersten Jahre der Facharztausbildung zur Internistin war ich Assistenzärztin 
                                in der Abteilung für Pneumologie (Lungenheilkunde) der Thoraxklinik Heidelberg. 
                                Es folgte die Weiterbildungszeit in der Inneren Medizin im St. Vincentius Krankenhaus 
                                und im Bethanien Krankenhaus Heidelberg. Hier war ich in den Abteilungen für Allgemeine Innere 
                                Medizin sowie Geriatrie und Palliativmedizin tätig.
                            </p>
                            <p>
                                <span>Nach</span> meiner Klinikzeit bin ich seit mehreren Jahren als Hausärztin im Rhein-Neckar-Kreis tätig.
                            </p>
                        </div>
                    </div>

                    {/* Arzt Two */}
                    <div className="arzt__two">
                        <div className="arzt__box">
                            <h2>Dr. med. Axel Sander</h2>
                            <h3>Facharzt für Allgemeinmedizin</h3>
                            <p>
                                <span>Das Medizinstudium</span> absolvierte ich in Homburg/Saar und Rennes/Frankreich. 
                                Promoviert habe ich zum Thema Schlaganfallprävention.
                            </p>
                            <p>
                               <span> Meine </span>internistische Facharztausbildung erhielt ich im Evangelischen Krankenhaus Zweibrücken, 
                                im Salemkrankenhaus Heidelberg und am NCT (Nationales Zentrum für Tumorerkrankungen), 
                                wo ich in Onkologie, Allgemeiner Innerer Medizin mit Schwerpunkt Gastroenterologie 
                                sowie Funktionsdiagnostik/Sonografie tätig war.
                            </p>
                            <p>
                               <span> Seit 2014</span> arbeite ich in der ambulanten Patientenversorgung als Hausarzt mit internistischem Schwerpunkt.
                            </p>
                        </div>
                        <img src={Arzt_Photo1} alt="Dr. Axel Sander" />
                    </div>

                </div>
            </div>
        </div>
    );
};
