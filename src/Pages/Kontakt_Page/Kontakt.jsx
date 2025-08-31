 import "./Kontakt.css";
import AnimatedPage from "../../Components/AnimatedPage/AnimatedPage";
import Rezept from "../../Assets/Praxis-images/rezept.webp";
import Überweisung from "../../Assets/Praxis-images/Überweisung.jpg";
// Icons
import { Phone, Printer, Mail, MapPin, Calendar } from "lucide-react";

export const Kontakt = () => {
  return (
    <AnimatedPage>
      <div className="kontakt">
        <div className="kontakt__container">
          <div className="kontakt__wrapper">
            <div className="container">
              <div className="kontakt__content">
                <h1>
                  <span>Kontakt</span> aufnehmen
                </h1>
              </div>
            </div>
          </div>

          {/* Praxiskontakt с картой */}
          <div className="anschrift_wrapper">
            <div className="container">
              <h2>Praxiskontakt</h2>
              <div className="kontakt__flex">
                {/* Адрес и контакты */}
                <ul>
                  <li>Hausarztpraxis Dr.Sander</li>

                  <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Phone size={24} color="#A82834" /> Telefon: 0 6201 62581
                  </li>

                  <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Printer size={24} color="#A82834" /> Fax: 06201 62544
                  </li>

                  <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Mail size={24} color="#A82834" /> E-Mail: info@hausarztpraxis-sander.de
                  </li>

                  <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <MapPin size={24} color="#A82834" /> Bergstraße 31 • 69469 Weinheim
                  </li>
                </ul>

                {/* Карта */}
                <div className="map__container">
                  <iframe
                    title="Praxis Standort"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2653.433281813005!2d8.662!3d49.548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797dada19a6e2a7%3A0x123456789abcdef!2sBergstraße%2031%2C%2069469%20Weinheim!5e0!3m2!1sde!2sde!4v1691234567890!5m2!1sde!2sde"
                    width="100%"
                    height="300"
                    style={{ border: 0, borderRadius: "12px" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Rezept- und Überweisungsbestellungen */}
 <div className="rezept_bestellungen_wrapper">
  <div className="container">
    <div className="bestellung__container">
      <div className="bestellungen_box">
        <h2>Rezept- und Überweisungsbestellungen</h2>
        <p>
          Sie können uns telefonisch unter der Nummer 06201 62581 erreichen.
          <br />
          Unsere telefonischen Sprechzeiten sind:
          <br />
          Vormittags: 8:30 – 12:00 Uhr (mittwochs ab 9:00 Uhr)
          <br />
          Nachmittags: 16:00 – 18:00 Uhr (montags, dienstags und donnerstags)
          <br />
          Für Rezept- oder Überweisungswünsche können Sie uns auch per E-Mail kontaktieren: info@hausarztpraxis-sander.de
        </p>
      </div>
 <div className="rezept__überweisung__container">
        <img src={Überweisung} alt="überweisung" className="img__überweisung" />
        <img src={Rezept} alt="rezept" className="img__rezept" />
    </div>
     
    </div>
  </div>
</div>


          {/* Terminvereinbarung с новым дизайном */}
          <section className="termin__container">
            <div className="container">
              <div className="termin__header">
               <div className="termin_vereinbarung">
                   <Calendar size={40} color="#A82834" />
                  <h2>Terminvereinbarung</h2>
               </div>
              </div>
              <div className="termin__text_card">
                <div className="termin__content">
                  <p>
                    <strong>Liebe Patientinnen und Patienten,</strong>
                    <br />
                    um Wartezeiten zu vermeiden und einen reibungslosen Ablauf in unserer Praxis zu gewährleisten, bitten wir Sie, vorab einen Termin zu vereinbaren.
                  </p>

                  <p>
                    Für Terminvereinbarungen stehen wir Ihnen gerne telefonisch oder per E-Mail zur Verfügung. Bitte geben Sie bei Ihrer Anfrage – <strong>wenn möglich</strong> – den Grund Ihres Besuchs an, damit wir ausreichend Zeit für Sie einplanen können.
                  </p>

                  <p>
                    Wir bemühen uns, Ihre Anfragen so schnell wie möglich zu beantworten. Vielen Dank für Ihr Verständnis und Ihre Mithilfe!
                  </p>

                  <p><strong>Ihr Praxisteam</strong></p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </AnimatedPage>
  );
};
