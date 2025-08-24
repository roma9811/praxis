import "./Kontakt.css";
import AnimatedPage from "../../Components/AnimatedPage/AnimatedPage";
import Rezept from "../../Assets/Praxis-images/rezept.webp";
import Überweisung from "../../Assets/Praxis-images/Überweisung.jpg";

export const Kontakt = () => {
    return(
       <AnimatedPage>
                 <div className="kontakt">
            <div className="kontakt__container">
                <div className="kontakt__wrapper">
                    <div className="container">
                        <div className="kontakt__content">
                            <h1><span>Kontakt</span> aufnehmen</h1>
                        </div>
                    </div>
                </div>
                       <div className="anschrift_wrapper">
                        <div className="container">
                             <h2>Praxiskontakt</h2>
                            <ul>
                                <li>Hausarztpraxis Dr.Sander</li>
                                <li>Telefon: 0 6201 62581</li>
                                <li>Fax: 06201 62544</li>
                                <li>E-Mail : info@hausarztpraxis-sander.de</li>
                                <li>Bergstraße 31 • 69469 Weinheim</li>
                            </ul>
                        </div>
                     </div>
                <div className="rezept_bestellungen_wrapper">
  <div className="container">
    <div className="bestellung__container">
      <div className="bestellungen_box">
        <h2>Rezept- und Überweisungsbestellungen</h2>
        <p>
          Sie können uns telefonisch unter der Nummer 06201 62581 erreichen.<br />
          Unsere telefonischen Sprechzeiten sind:<br />
          Vormittags: 8:30 – 12:00 Uhr (mittwochs ab 9:00 Uhr)<br />
          Nachmittags: 16:00 – 18:00 Uhr (montags, dienstags und donnerstags)
          Für Rezept- oder Überweisungswünsche können Sie uns auch per E-Mail kontaktieren: info@hausarztpraxis-sander.de
        </p>
      </div>

      <div className="rezept__überweisung">
        <img src={Überweisung} alt="überweisung" className="img__überweisung" />
         <img src={Rezept} alt="rezept" className="img__rezept" />
      </div>
    </div>
  </div>
</div>

            </div>
           <section className="termin__container">
  <div className="container">
    <div className="termin__header">
      <h2>Terminvereinbarung</h2>
    </div>
    <div className="termin__text">
      <p>
        Liebe Patientinnen und Patienten,
        <br />
        um Wartezeiten zu vermeiden und einen reibungslosen Ablauf in unserer Praxis zu gewährleisten, bitten wir Sie, vorab einen Termin zu vereinbaren.
      </p>
      <p>
        Für Terminvereinbarungen stehen wir Ihnen gerne telefonisch oder per E-Mail zur Verfügung.
        Bitte geben Sie bei Ihrer Anfrage – wenn möglich – den Grund Ihres Besuchs an, damit wir ausreichend Zeit für Sie einplanen können.
      </p>
      <p>
      </p>
      <p>
        Wir bemühen uns, Ihre Anfragen so schnell wie möglich zu beantworten.
        <br />
        Vielen Dank für Ihr Verständnis und Ihre Mithilfe!
      </p>
      <p>Ihr Praxisteam</p>
    </div>
  </div>
</section>

        </div>
       </AnimatedPage>
    )
}