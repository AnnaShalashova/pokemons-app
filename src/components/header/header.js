import React from "react";
import { Link } from "react-router-dom";

import pokemonLogoImg from "../images/title.png";
import "./header.css";


const Header = () => {
    return (
        <div className="header navbar navbar-expand-lg navbar-dark bg-primary">
            <Link to="/pokemons" className="btn btn-primary">Pokemons</Link>
            <Link to="/">
                <img className="pokemon-logo" src={pokemonLogoImg} alt="pokemon-logo" />
            </Link> 
            <Link to="history" className="btn btn-primary">History</Link>
        </div>
    )
}

export default Header;