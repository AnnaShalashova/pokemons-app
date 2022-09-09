import React, { useState, useCallback } from "react";

import "./pokemons-page.css";
import PokemonItem from "../pokemon-details";
import Itemslist from "../items-list";

const PokemonsPage = () => {
  console.log("POkemonsPage Rendering");

  const [pokemonId, setPokemonId] = useState(null);
  const [searchText, setSearchText] = useState("");

  return (
      <div className="pokemons-page-container">
        <div>
          <input className="search-pokemon form-control me-sm-2" type="text" 
            placeholder="Search for Pokemon" value={searchText} 
            onInput={(e) => setSearchText(e.target.value)}>
          </input>
          <div className="pokemons-list-container">
            <Itemslist getPokemon={useCallback((id) => setPokemonId(id), [])} searchText={searchText}/>
          </div>
        </div>
        <PokemonItem id={pokemonId}/>
      </div>
  )
}

export default PokemonsPage;