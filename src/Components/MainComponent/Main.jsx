import "./Main.css";
import Arzt from "../../Assets/Praxis-images/1.jpg";

export const MainComponent = () => {
    return(
        <div className="main">
            <div className="container">
                <h2>Unsere Ärzte</h2>
                <div className="ärzte">
                    <div className="arzt__one">
                        <img src={Arzt} alt="" width={500} />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia corporis quos possimus a doloremque, 
                            optio itaque? Eveniet dolore voluptatem iste tempore reiciendis odio, beatae a veniam id vero! Praesentium, totam.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}