import React, { useState } from "react";

import "./pokemons-page.css";
import PokemonDetails from "../pokemon-details";
import Itemslist from "../items-list";
import ErrorIndicator from "../error-indicator";

const PokemonsPage = () => {

  const [pokemonId, setPokemonId] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState(false);

  if (error) {
    return <ErrorIndicator resetPage={() => setError(false)}/>
  }

  return (
    
      <div className="pokemon-page">
        <input className="search-pokemon form-control me-sm-2" type="text" 
            placeholder="Search for Pokemon" value={searchText} 
            onInput={(e) => setSearchText(e.target.value)}>
          </input>
        <div className="pokemons-page-container">
          <Itemslist getPokemon={(id) => setPokemonId(id)}
              setError={() => setError(true)} error searchText={searchText}/>
          <PokemonDetails id={pokemonId}/>
        </div>
      </div>
  )
}

export default PokemonsPage;