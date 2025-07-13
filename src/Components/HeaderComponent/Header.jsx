import "./Header.css";
import React from "react";
import test from "../../Assets/Praxis-images/test.png"

export const HeaderComponent = () => {
    return(
        <div className="header">
            <div className="praxis__image">
                <img src={test} alt="" />
            </div>
           
        </div>
    )
}