   import "./Notfall.css";
 import AnimatedPage from "../../Components/AnimatedPage/AnimatedPage";


export const Notfall = () => {
  return (
   <AnimatedPage>
    <div className="notfall">
        <div className="notfall__wrapper">
          <div className="container">
              <div className="notfall__header">
                  <h1><span>Im Notfall</span> - so handeln Sie richtig!</h1>
              </div>
          </div>
        </div>
        <div className="notfall__box">
              <div className="container">
                   <h2>Akuter Notfall in der Praxis:</h2>
                   <p>
                      Wenn es Ihnen sehr schlecht geht oder Sie einen medizinischen  <br />Notfall vermuten,
                      sagen Sie uns bitte sofort bei Ihrer Ankunft  <br />in der Praxis Bescheid. 
                      Wir kümmern uns dann umgehend um Sie.
                    </p>
              </div>
        </div>
        <div className="notfall__box2">
          <div className="container">
                 <h2>Außerhalb unserer Sprechzeiten:</h2>
              <p>
                Wenden Sie sich bitte an den ärztlichen Bereitschaftsdienst <br /> unter der bundesweit einheitlichen <span>Telefonnummer: 116117</span>. <br />
                Die Bereitschaftsdienstpraxis befindet sich im Nebengebäude <br /> der GRN Klinik Weinheim, Röntgenstraße 1, 69469 Weinheim.
              </p>
            </div>
          </div>
          <div className="notfall__contacts">
  <div className="container">
    <h2>Wichtige Notfallkontakte:</h2>
    <div className="contacts__grid">
      <div className="contact__card">
        <h3>Ärztlicher Bereitschaftsdienst:</h3> 
      <p>  Ärztehaus 1, Nebengebäude der GRN-Klinik<br />
        Röntgenstraße 1, 69469 Weinheim<br />
        Telefon: 116 117</p>
      </div>
      <div className="contact__card">
         <h3>Giftnotruf Baden-Württemberg:</h3>
       <p> Telefon: 0761 / 1 92 40<br />
        Vergiftungs-Informations-Zentrale Freiburg (VIZ)<br />
        Universitätsklinikum Freiburg</p>
      </div>

      <div className="contact__card">
         <h3>Notaufnahme:</h3>
       <p> GRN-Klinik Weinheim Notfallambulanz<br />
        Röntgenstraße 1, 69469 Weinheim<br />
        Telefon: 06201 / 89 - 0</p>
      </div>
    </div>
  </div>
</div>

        </div>
 
   
 
   </AnimatedPage>
  );
};
