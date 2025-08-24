 import { useEffect } from "react";
import "./Impressum.css";
 import AnimatedPage from "../../Components/AnimatedPage/AnimatedPage";


export const Impressum = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Скролл наверх при загрузке страницы
  }, []);

  return (
   <AnimatedPage>
           <section className="impressum">
      <div className="impressum-wrapper">
        <h1>Impressum</h1>

        <div className="impressum-block">
          <h2>Praxisinhaber</h2>
          <p>
            <strong>Dres. Kathrin und Axel Sander</strong><br />
            Bergstraße 31<br />
            69469 Weinheim
          </p>
        </div>

        <div className="impressum-block">
          <h2>Kontakt</h2>
          <p>
            Telefon: <a href="tel:0620162581">06201 62581</a><br />
            Telefax: 06201 62544<br />
            E-Mail: <a href="mailto:info@hausarztpraxis-sander.de">info@hausarztpraxis-sander.de</a>
          </p>
        </div>

        <div className="impressum-block">
          <h2>Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            (noch nicht vorhanden)
          </p>
        </div>

        <div className="impressum-block">
          <h2>Berufsrechtliche Angaben</h2>
          <p>
            Fachärzte für Innere Medizin:<br />
            Dr. Kathrin Sander<br />
            Dr. Axel Sander
          </p>
          <p>
            Zuständige Kammer:<br />
            Landesärztekammer Baden Württemberg<br />
            Jahnstraße 40, 70597 Stuttgart<br />
            <a href="https://www.kvbawue.de" target="_blank" rel="noreferrer">www.kvbawue.de</a>
          </p>
          <p>Verliehen in: Deutschland</p>
        </div>

        <div className="impressum-block">
          <h2>Redaktion</h2>
          <p>Dres. Kathrin und Axel Sander<br />Bergstraße 31, 69469 Weinheim</p>
        </div>

        <div className="impressum-block">
          <h2>Streitbeilegung</h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
            vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </div>
    </section>
   </AnimatedPage>
  );
};
