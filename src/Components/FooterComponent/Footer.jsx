 import "./Footer.css";
import Logo from "../../Assets/Logo/logo.png";
import Play from "../../Assets/Logo/play.png";
import { Link } from "react-router-dom";

export const FooterComponent = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer__container">
                    <div className="logo__footer">
                        <img src={Logo} alt="logo" width={200} />
                        <div className="anfarht">
                            <iframe
                                title="Anfahrt"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2636.1355818620325!2d8.678236815674289!3d49.554614979364746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797e02e0d8ae4c9%3A0xa8b8eb327e1cbb72!2sBergstra%C3%9Fe%2031%2C%2069469%20Weinheim!5e0!3m2!1sde!2sde!4v1655400190406!5m2!1sde!2sde"
                                width="100%"
                                height="200"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    <div className="kontakt">
                        <h2>Kontakt</h2>
                        <ul>
                            <li>Hausarztpraxis Dr.Sander</li>
                            <li>Telefon: 0 6201 62581</li>
                            <li>Fax: 06201 62544</li>
                            <li>E-Mail : info@hausarztpraxis-sander.de</li>
                            <li>Bergstraße 31 • 69469 Weinheim</li>
                        </ul>
                    </div>

                    <div className="info">
                        <h2>Info</h2>
                        <p>
                            Ihre Gesundheit steht bei uns im Mittelpunkt. Mit unserem breiten Leistungsspektrum in der Allgemeinmedizin bieten wir 
                            Ihnen eine umfassende Versorgung. 
                            Besuchen Sie unsere Praxis in Weinheim und lernen Sie unser Team kennen.
                        </p>
                    </div>

                    <div className="links">
                        <h2>Links</h2>
                        <ul>
                            <li>
                                <img src={Play} alt="" width={40} />
                                <Link to="/impressum" className="impressum_link">Impressum</Link>
                            </li>
                            <li>
                                <img src={Play} alt="" width={40} />
                                <Link to="/datenschutz" className="datenschutz_link">Datenschutz</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
