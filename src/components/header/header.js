import React from "react";
import { Link } from "react-router-dom";

import pokemonLogoImg from "../images/title.png";
import Theme from "../theme";
import "./header.css";


const Header = ({ theme }) => {
    

    const changeColor = (e) => {
        const pokemonsPage = document.getElementById("pokemonsPage");
        const history = document.getElementById("history");
        pokemonsPage.classList.remove("active");
        history.classList.remove("active");
        e.target.classList.add("active")
    }

    return (
        <div className={`header navbar navbar-expand-lg navbar-dark bg-primary header-${theme}`}>
            <Theme />
            <Link to="/pokemons" id="pokemonsPage" className={`btn btn-primary mybtn-${theme}`} onClick={changeColor}>Pokemons</Link>
            <Link to="/">
                <img className="pokemon-logo" src={pokemonLogoImg} alt="pokemon-logo" />
            </Link> 
            <Link to="history" id="history" className={`btn btn-primary mybtn-${theme}`} onClick={changeColor}>History</Link>
        </div>
    )
}

export default Header;