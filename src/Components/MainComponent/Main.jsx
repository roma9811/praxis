import "./Main.css";
import Zeit from "../../Assets/Logo/zeit.png";
import Telefon from "../../Assets/Logo/telefon.png";
import Kontakt from "../../Assets/Logo/kontakt.png";
import { motion } from "framer-motion";

export const MainComponent = () => {
  return (
    <div className="main">
      <div className="container">
        <motion.div
          className="öffnungszeiten__contianer"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >

          {/* Öffnungszeiten */}
          <div className="öffnungszeiten__box">
            <div className="öffnungszeiten__header">
              <img src={Zeit} alt="zeit" width={30} />
              <h2>Öffnungszeiten:</h2>
            </div>
            <ul>
              <li><span>Mo - Di - Do:</span></li>
              <li>8:00 - 13:00 Uhr und 15:00 - 18:00 Uhr</li>
              <li><span>Mi - Fr:</span></li>
              <li>8:00 - 13:00 Uhr</li>
            </ul>
          </div>

          {/* Telefonsprechstunden */}
          <div className="telefon__box">
            <div className="telefon__header">
              <img src={Telefon} alt="telefon" width={30} />
              <h2>Telefonsprechstunden:</h2>
            </div>
            <ul>
              <li><span>Mo - Di - Do:</span></li>
              <li>8:30 - 12:00 Uhr und 16:00 - 18:00 Uhr</li>
              <li><span>Mi:</span> 9:00 - 12:00 Uhr</li>
              <li><span>Fr:</span> 8:30 - 12:00 Uhr</li>
            </ul>
          </div>

          {/* Kontakt */}
          <div className="kontakt__box">
            <div className="kontakt__header">
              <img src={Kontakt} alt="kontakt" width={30} />
              <h2>Kontakt:</h2>
            </div>
            <ul>
              <li><span>Telefon:</span> +49 (0) 6201 62581</li>
              <li><span>Telefax:</span> +49 (0) 06201 62544</li>
              <li><span>E-Mail:</span> info@hausarztpraxis-sander.de</li>
            </ul>
          </div>

        </motion.div>
      </div>
    </div>
  );
};
