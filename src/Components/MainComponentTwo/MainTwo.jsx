 import "./MainTwo.css";
import Play from "../../Assets/Logo/play.png";
 import {HeartPulse } from "lucide-react";
export const MainComponentTwo = () => {
    return (
        <div className="main__two">
            <div className="container">
                <div className="leistungen__container">
                    <div className="leistungen__text">
                        <div className="service__icon">
                             <HeartPulse size={35} color="#A82834" />
                        </div>
                        <h1>Unsere Leistungen</h1>
                    </div>
                    <div className="untersuchungen__container">
                        <div className="untersuchungen__box">
                            <div className="box__header">
                                <img src={Play} alt="play" width={50} />
                                <h3>Allgemeinmedizinische Untersuchungen</h3>
                            </div>
                            <p>
                                Wir bieten gründliche Untersuchungen an, um Ihre Gesundheit zu schützen und Krankheiten rechtzeitig zu erkennen.
                                Auch Vorsorgeuntersuchungen gehören dazu – sie werden ab 35 von allen gesetzlichen Kassen alle drei Jahre übernommen.
                            </p>
                        </div>
                        <div className="untersuchungen__box">
                            <div className="box__header box__header__two">
                                <img src={Play} alt="play" width={50} />
                                <h3>Diagnostik und Therapie</h3>
                            </div>
                            <p>
                                Wir behandeln akute Beschwerden wie Erkältungen, Magen-Darm-Infekte oder kleinere Verletzungen und begleiten Sie bei chronischen
                                Erkrankungen wie Bluthochdruck, Asthma oder Diabetes mellitus zuverlässig und langfristig.
                            </p>
                        </div>
                        <div className="untersuchungen__box">
                            <div className="box__header box__header__two">
                                <img src={Play} alt="play" width={50} />
                                <h3>Gesundheitsvorsorge und Impfungen</h3>
                            </div>
                            <p>
                                Als Hausarzt und Hausärztin beraten wir Sie, Herr Dr. Sander und Frau Dr. Sander,
                                gerne bei allen Fragen zur Gesundheit und unterstützen Sie bei der Planung von Vorsorgeuntersuchungen,
                                Impfungen und weiteren medizinischen Maßnahmen.
                            </p>
                        </div>
                        <div className="untersuchungen__box">
                            <div className="box__header">
                                <img src={Play} alt="play" width={50} />
                                <h3>Weitere Leistungen</h3>
                            </div>
                            <p>
                                Neben den genannten Leistungen bieten wir in unserer Praxis auch weitere Untersuchungen und Therapien an,
                                zum Beispiel EKG, Lungenfunktionsprüfung oder Laboruntersuchungen.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
