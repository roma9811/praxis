 import "./Main.css";
import { Clock, PhoneCall, Contact } from "lucide-react";
import { motion } from "framer-motion";

export const MainComponent = () => {
  return (
    <div className="main">
      <div className="container">

      <div className="praxis__info">
               {/* Öffnungszeiten */}
        <motion.div
          className="öffnungszeiten__box"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="öffnungszeiten__header">
            <h2> <Clock size={30} color="#A82834" /> Öffnungszeiten:</h2>
          </div>
          <ul>
            <li><span>Mo - Di - Do:</span></li>
            <li>8:00 - 13:00 Uhr und 15:00 - 18:00 Uhr</li>
            <li><span>Mi - Fr:</span></li>
            <li>8:00 - 13:00 Uhr</li>
          </ul>
        </motion.div>

        {/* Telefonsprechstunden */}
        <motion.div
          className="telefon__box"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="telefon__header">
            <h2><PhoneCall size={30} color="#A82834"/>Telefonsprechstunden:</h2>
          </div>
          <ul>
            <li><span>Mo - Di - Do:</span></li>
            <li>8:30 - 12:00 Uhr und 16:00 - 18:00 Uhr</li>
            <li><span>Mi:</span> 9:00 - 12:00 Uhr</li>
            <li><span>Fr:</span> 8:30 - 12:00 Uhr</li>
          </ul>
        </motion.div>

        {/* Kontakt */}
        <motion.div
          className="kontakt__box"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          <div className="kontakt__header">
            <h2><Contact size={30} color="#A82834"/>Kontakt:</h2>
          </div>
          <ul>
            <li><span>Telefon:</span> +49 (0) 6201 62581</li>
            <li><span>Telefax:</span> +49 (0) 06201 62544</li>
            <li><span>E-Mail:</span> info@hausarztpraxis-sander.de</li>
          </ul>
        </motion.div>
      </div>

      </div>
    </div>
  );
};
