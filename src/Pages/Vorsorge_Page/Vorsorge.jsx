 import "./Vorsorge.css";
import AnimatedPage from "../../Components/AnimatedPage/AnimatedPage";
import { motion } from "framer-motion";
import {
  Stethoscope,
  ClipboardList,
  HeartPulse,
  Sun,
  ClipboardCheck,
  Users,
  ShieldCheck,
  Activity,
  Syringe,
  Microscope,
  Scan,
} from "lucide-react";

export const Vorsorge = () => {
  const leistungen = [
    { title: "Umfassende ganzheitliche hausärztliche Betreuung", Icon: Stethoscope },
    { title: "Teilnahme am HZV-Programm (Hausarztzentrierte Versorgung)", Icon: ClipboardList },
    { title: "DMP für Diabetes, Asthma, COPD und KHK", Icon: HeartPulse },
    { title: "Hautkrebsvorsorge (ab 35 Jahre, alle 2 Jahre)", Icon: Sun },
    { title: "Check Up 35 (ab 35 Jahre, alle 3 Jahre)", Icon: ClipboardCheck },
    { title: "Check Up unter 35 (einmalig 18–35 Jahre)", Icon: Users },
    { title: "Prostatakrebsvorsorge (ab 45 Jahre, jährlich)", Icon: ShieldCheck },
    { title: "Darmkrebsvorsorge (ab 50 Jahre, jährlich)", Icon: Users },
  ];

  const diagnostik = [
    { title: "EKG (Langezeit-EKG,Belastungs-EKG)", Icon: Activity },
    { title: "Langzeit-Blutdruck", Icon: HeartPulse },
    { title: "Lungenfunktion", Icon: Stethoscope },
    { title: "Ultraschall (Bauch, Schilddrüse, Halsgefäße)", Icon: Scan },
    { title: "Impfberatung & Impfungen (STIKO)", Icon: Syringe },
    { title: "Labor inkl. INR-Untersuchung", Icon: Microscope },
  ];

  const renderList = (items, className = "") => (
    <ul className={`vorsorge-list ${className}`}>
      {items.map(({ title, Icon }, idx) => (
        <motion.li
          key={idx}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: idx * 0.05 }}
          className="vorsorge-item"
        >
          <div className="vorsorge-icon">
            <Icon size={22} />
          </div>
          <span>{title}</span>
        </motion.li>
      ))}
    </ul>
  );

  return (
    <AnimatedPage>
      <div className="vorsorge">
        <div className="vorsorge__container">
          <div className="container vorsorge__box">
            <h1>
              Hausärztliche <span>Grundversorgung</span>
            </h1>
          </div>
        </div>
        <div className="container">
          <div className="vorsorge__text">
            <p>
              <span>Ein</span> gesunder Lebensstil, regelmäßige Bewegung,
              ausgewogene Ernährung und medizinische Vorsorge – das bildet die Grundlage für ein langes und gesundes Leben.
            </p>
            <p>
              Viele chronische Erkrankungen entstehen schleichend und bleiben lange unbemerkt. Deshalb ist es wichtig, rechtzeitig Risiken zu erkennen und gezielt vorzubeugen.
            </p>
          </div>
        </div>

 
        <div className="vorsorge__services__wrapper">
        <div className="container">
          <section className="vorsorge-section">
            <h2>Unsere Leistungen im Überblick</h2>
            {renderList(leistungen, "two-columns")}
          </section>
        </div>
        </div>
        {/* Diagnostik*/}
            <div className="diagnostik">
              <div className="container">
                          <section className="vorsorge-section">
          <h2> <span>Diagnostische Untersuchungen</span></h2>
          {renderList(diagnostik, "two-columns")}
          </section>
              </div>
              
          </div>
        
      </div>
    </AnimatedPage>
  );
};
