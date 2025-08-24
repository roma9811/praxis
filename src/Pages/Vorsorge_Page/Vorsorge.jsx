 import "./Vorsorge.css";
 import AnimatedPage from "../../Components/AnimatedPage/AnimatedPage";
export const Vorsorge = () => {
  return (
   <AnimatedPage>


     <div className="vorsorge">
      <div className="vorsorge__container">
          <div className="container vorsorge__box">
               <h1>Hausärztliche <span>Grundversorgung</span></h1>
          </div>
      </div>
     
      

          {/* Основной контент */}
           <div className="container">
              <div className="vorsorge__text">
                <p>
                  Ein gesunder Lebensstil, regelmäßige Bewegung, ausgewogene Ernährung und medizinische Vorsorge – 
                  das bildet die Grundlage für ein langes und gesundes Leben. Viele chronische Erkrankungen wie Diabetes, 
                  Bluthochdruck oder Herz-Kreislauf-Erkrankungen entstehen schleichend und bleiben lange unbemerkt. 
                  Deshalb ist es wichtig, rechtzeitig Risiken zu erkennen und gezielt vorzubeugen.
                </p>
              </div>
               </div>
                <div className="vorsorge__services__wrapper">
                <div className="container vorsorge__services">
               <h2>Unsere Leistungen im Überblick:</h2>
<ul>
  <li>Umfassende ganzheitliche hausärztliche Betreuung</li>
  <li>Teilnahme am HZV-Programm (Hausarztzentrierte Versorgung / Hausärztliches Versorgungsprogramm)</li>
  <li>DMP (Disease Management Programm) für Diabetes mellitus Typ 2, Asthma bronchiale, COPD und KHK (Koronare Herzkrankheit)</li>
  <li>Hautkrebsvorsorge (ab 35 Jahre, alle 2 Jahre)</li>
  <li>Check Up 35 (Kassencheck ab 35 Jahre, alle 3 Jahre)</li>
  <li>Check Up unter 35 (einmalig zwischen 18 und 35 Jahre)</li>
  <li>Prostatakrebsvorsorgeuntersuchungen (jährlich ab 45 Jahre)</li>
  <li>Darmkrebsvorsorge (jährlich ab 50 Jahre), sowie Beratungen zu Vorsorgemöglichkeiten von Darmkrebs</li>
</ul>
              </div>
              </div>
            
              <div className="container diagnostik__box">  
                <h2>Diagnostische Untersuchungen:</h2>
                <ul className="vorsorge__services">
                  <li>EKG</li>
                  <li>Langzeit-Blutdruck</li>
                  <li>Lungenfunktion</li>
                  <li>Ultraschalluntersuchungen der Bauchorgane, der Schilddrüse und der Beingefäße</li>
                  <li>Impfberatung und Impfungen gemäss STIKO-Empfehlungen</li>
                  <li>Regelmässige Laboruntersuchungen inkl. INR-Untersuchung und Therapieeinstellung bei Marcumartherapie</li>
                </ul>
                </div>
            </div>
       
   </AnimatedPage>

  );
};
 