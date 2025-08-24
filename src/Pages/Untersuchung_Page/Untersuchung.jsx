 import "./Untersuchung.css";
import EKG from "../../Assets/Praxis-images/EKG.png";
import Belastung_EKG from "../../Assets/Praxis-images/Bel-Ekg.png";
import Sono from "../../Assets/Praxis-images/sono.png";
import LZ_EKG from "../../Assets/Praxis-images/lz-ekg.png";
import LZ_RR from "../../Assets/Praxis-images/lz-rr.png";
import Lufu from "../../Assets/Praxis-images/lufu.png";
 import AnimatedPage from "../../Components/AnimatedPage/AnimatedPage";
export const Untersuchung = () => {
  return (
 <AnimatedPage>
       <div className="untersuchung">
     <div className="untersuchungen__wrapper">
           <div className="container">
        <div className="untersuchungen__header">
          <h1>Regelmäßige <span> Untersuchungen</span></h1>
        </div>
      </div>
     </div>

      <div className="ekg__box__wrapper">
        <div className="container ekg__box">
          <img src={EKG} alt="ekg"/>
          <div className="ekg__text">
            <h2>EKG – Elektrokardiogramm</h2>
            <p>
              Das Elektrokardiogramm (EKG) ist eine wichtige, schnelle und
              schmerzfreie Basisuntersuchung in unserer hausärztlichen Praxis.
              Dabei wird die elektrische Aktivität des Herzmuskels gemessen und
              grafisch dargestellt. Ein EKG hilft uns, Hinweise auf
              verschiedene Herzerkrankungen wie Herzrhythmusstörungen,
              Durchblutungsstörungen oder Herzinfarkte zu erkennen. Die
              Untersuchung dauert nur wenige Minuten und liefert wertvolle
              Informationen über Ihre Herzgesundheit – ganz ohne Belastung für
              den Körper.
            </p>
          </div>
        </div>
      </div>

      <div className="belastung__box__wrapper">
        <div className="container belastung__box">
          <div className="bel_ekg_text">
            <h2>Belastungs-EKG - Ergometrie</h2>
            <p>
              Ergometrie (Belastungs - EKG) ist eine EKG-Aufzeichnung unter
              körperlicher Belastung, die nach vorgegebenen Protokollen auf
              einem Fahrradergometer durchgeführt wird. Beurteilt werden hier
              insbesondere belastungsinduzierte Veränderungen, welche auf eine
              Durchblutungsstörung des Herzen hinweisen können,
              belastungsinduzierte Herzrhythmusstörungen, das
              Blutdruckverhalten sowie auch die allgemeine körperliche
              Leistungsfähigkeit.
            </p>
          </div>
          <img src={Belastung_EKG} alt="belastung ekg"  />
        </div>
      </div>
            <div className="ultraschall__box__wrapper">
        <div className="container ultraschall__box">
            <img src={Sono} alt="sono"  />
          <div className="ultraschall_text">
            <h2>Ultraschall-Echokardiographie</h2>
            <p>
              In unserer Praxis führen wir folgende Ultraschalluntersuchungen durch:Bauchorgane (Abdomen),Schilddrüse
              ,Halsschlagadern (Carotis-Duplex) zur Schlaganfallvorsorge, Herz (Echokardiographie) zur Beurteilung der Herzfunktion.
              Die Untersuchungen sind schmerzfrei, strahlungsfrei und helfen bei der Früherkennung wichtiger Erkrankungen.
            </p>
          </div>
         
        </div>
      </div>
        <div className="lzekg__box__wrapper">
        <div className="container lzekg__box">
          <div className="lzekg_text">
            <h2>Langzeit-EKG</h2>
            <p>
               Das Langzeit - EKG dient der Erfassung von Herzrhythmusstörungen. Der Patient trägt dabei meistens über 24 Stunden, 
               bei Bedarf aber auch mehrere Tage, ein kleines tragbares EKG - Gerät mit sich, welches kontinuierlich den Herzrhythmus aufzeichnet.
            </p>
          </div>
             <img src={LZ_EKG} alt="lz_ekg" />
        </div>
        <div className="container lz_rr__box">
            <img src={LZ_RR} alt="lz-rr"   />
             <div className="lzrr_text">
            <h2>Langzeit-Blutdruckmessung</h2>
            <p>
                Der Blutdruck unterliegt im Laufe des Tages erheblichen Scwankungen und 
                reagiert sehr sensibel auf kleinste körperliche und seelische Belastungen. 
                Um die Diagnose eines Bluthochdrucks zu stellen oder Therapiewirksamkeit der Blutdruckmedimanete 
                zu überprüfen ist deshalb eine Langzeit - Blutdruckmessung erforderlich.
                Der Blutdruck wird dabei über 24 Stunden in festen Abständen automatisch gemessen. 
            </p>
          </div>
        </div>
      </div>
        <div className="spirometrie__box__wrapper">
        <div className="container spirometrie__box">
         
          <div className="spirometrie__text">
            <h2>Spirometrie</h2>
            <p>
               Bei Einschränkung der körperlichen Leistungsfähigkeit ist es oft schwierig, die Ursache herauszufinden. 
               Handelt es sish um ein Problem des Herzens, de Lunge oder der peripheren Muskulatur? Die Spiroergometrie stellt eine Form des Belastungs - 
               EKG dar, wo simultan die Atemgase, die Atemmechanik und die Herzkreilaufparameter gemessen werden und so die Ursache der Leistunsreduktion 
               besser eingegrenzt werden kann. Ein der großen Einstzagebiete der Spipiroergometrie is die Ausdauerleistungsdiagsnostik in der Sportmedizin. 
               Genauso unerlässilig ist diese Untersiuchg aber auch bei vilene herz- oder lungenkraken Patientin bei z.B. der Frage nach OP -Fähigkeit.
            </p>
          </div>
           <img src={Lufu} alt="lufu"/>
        </div>
      </div>
    </div>
 </AnimatedPage>
  );
};
