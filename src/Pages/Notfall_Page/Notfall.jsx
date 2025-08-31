 import "./Notfall.css";
import AnimatedPage from "../../Components/AnimatedPage/AnimatedPage";
import Alarm from "../../Assets/Logo/alarm.png";

export const Notfall = () => {
  return (
    <AnimatedPage>
      <div className="notfall">
        {/* Header */}
        <div className="notfall__wrapper">
          <div className="container">
            <div className="notfall__header">
              <h1>
                <span>Im Notfall</span> - so handeln Sie richtig!
              </h1>
            </div>
          </div>
        </div>

        {/* Akuter Notfall */}
        <div className="notfall__box">
          <div className="container">
            <h2>Akuter Notfall in der Praxis</h2>
            <p>
              <span>Wenn</span> es Ihnen sehr schlecht geht oder Sie einen medizinischen
              Notfall vermuten, sagen Sie uns bitte sofort bei Ihrer Ankunft
              in der Praxis Bescheid. Wir kümmern uns dann umgehend um Sie.
            </p>
          </div>
        </div>

        {/* Außerhalb der Sprechzeiten */}
        <div className="notfall__box2">
          <div className="container">
            <div className="notfall__box__header">
              <img
                src={Alarm}
                alt="Alarm Icon"
                width={50}
                className="alarm-icon"
              />
              <h2>Außerhalb unserer Sprechzeiten</h2>
            </div>

            <p>
              Wenden Sie sich bitte an den ärztlichen Bereitschaftsdienst
              <br />
              unter der bundesweit einheitlichen{" "}
              <span>Telefonnummer: 116117</span>.
              <br />
              Die Bereitschaftsdienstpraxis befindet sich im Nebengebäude
              <br />
              der GRN Klinik Weinheim, Röntgenstraße 1, 69469 Weinheim.
            </p>
          </div>
        </div>

        {/* Wichtige Kontakte */}
        <div className="notfall__contacts">
          <div className="container">
            <h2>Wichtige Notfallkontakte</h2>

            <div className="contacts__grid">
              <div className="contact__card">
                <h3>Ärztlicher Bereitschaftsdienst:</h3>
                <p>
                  Ärztehaus 1, Nebengebäude der GRN-Klinik
                  <br />
                  Röntgenstraße 1, 69469 Weinheim
                  <br />
                  Telefon: 116 117
                </p>
              </div>

              <div className="contact__card">
                <h3>Giftnotruf Baden-Württemberg:</h3>
                <p>
                  Telefon: 0761 / 1 92 40
                  <br />
                  Vergiftungs-Informations-Zentrale Freiburg (VIZ)
                  <br />
                  Universitätsklinikum Freiburg
                </p>
              </div>

              <div className="contact__card">
                <h3>Notaufnahme:</h3>
                <p>
                  GRN-Klinik Weinheim Notfallambulanz
                  <br />
                  Röntgenstraße 1, 69469 Weinheim
                  <br />
                  Telefon: 06201 / 89 - 0
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

