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
                    <div className="arzt__one">
                        <img src={Arzt_Photo2} alt="arzt" />
                        <div className="arzt__box">
                            <h2>Dr. med. Kathrin Sander</h2>
                                <h3>Fachärztin für Allgmeinmedizin</h3>
                            <p>Medizin studierte ich an der Universität des Saarlandes und in meiner Heimatstadt Heidelberg, wo ich zu
                                Rudolph Virchow promoviert habe. Medizinhistorische Themen und Sprache interessierten mich seit
                                jeher, daher habe ich neben Medizin Geschichte und Germanistik studiert (Abschluss Magister artium).
                                Während meiner ersten Jahre der Facharztausbildung zur Internistin war ich Assistenzärztin in der
                                Abteilung für Pneumologie (Lungenheilkunde) der Thoraxklinik Heidelberg. Es folgte die
                                Weiterbildungszeit in der Inneren Medizin im St. Vincentius Krankenhaus und im Bethanien Krankenhaus
                                Heidelberg. Hier war ich in den Abteilungen für Allgemeine Innere Medizin wie auch Geriatrie und
                                Palliativmedizin tätig. Nach der Klinikzeit bin ich seit mehreren Jahren Hausärztin im Rhein-Neckar-Kreis.
                            </p>
                        </div>
                    </div>

                    <div className="arzt__two">
                        <div className="arzt__box">
                            <h2>Dr. med. Axel Sander</h2>
                            <h3>Facharzt für Allgmeinmedizin</h3>
                            <p>Das Medizinstudium absolvierte ich in Homburg/Saar und Rennes/Frankreich. Promoviert habe ich zum
                               Thema Schlaganfallprävention. Meine internistische Facharztausbildung erhielt ich im Evangelischen
                               Krankenhaus Zweibrücken, im Salemkrankenhaus Heidelberg und am NCT (Nationales Zentrum für
                               Tumorerkrankungen), wo ich im Bereich Onkologie, Allgemeine Innere Medizin mit Schwerpunkt
                               Gastroenterologie und in der Funktionsdiagnostik/Sonografie tätig war. Seit 2014 arbeite ich in der
                               ambulanten Patientenversorgung als Hausarzt mit internistischem Schwerpunkt.
                            </p>
                        </div>
                         <img src={Arzt_Photo1} alt="arzt" />
                    </div>
                </div>
            </div>
        </div>
    );
};
