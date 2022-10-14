import React from "react";

import img from "../images/18.webp";
import "./stub-component.css";

const StubComponent = () => {


    return (
        <div className="stub-component-container">
            <img className="stub-img" alt="Sad pokemon" width="200px" src={img} />
            <div className="text-container">
                <h1>Ooooops...</h1>
                <p className="text">The resource reguested could not be found on this server!</p>
            </div>
        </div>
    )
}

export default StubComponent;