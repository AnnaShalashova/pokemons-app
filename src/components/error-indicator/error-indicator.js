import React from "react";
import errImg from "../images/18.webp";
import "./error-indicator.css"

const ErrorIndicator = ({ resetPage }) => {
    return (
        <div className="error-container">
            <img className="error-img" alt="error-indicator" src={errImg}></img>
            <div className="error-text">
                <h1>Oooops...</h1>
                <p>Sorry, something has wrong. Please, reload this page.</p>
                <button type="button" className="btn btn-primary"
                    onClick={() => resetPage(false)}>Reset</button>
            </div>
        </div>
    )
}

export default ErrorIndicator;