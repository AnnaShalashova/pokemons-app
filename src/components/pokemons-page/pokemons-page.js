import React from "react";

import "./pokemons-page.css";
import PokemonDetails from "../pokemon-details";
import Itemslist from "../items-list";
import ErrorIndicator from "../error-indicator";
import {setSearchText} from "../../slices/pokemonsSlice";
import { useSelector, useDispatch } from "react-redux";

const PokemonsPage = () => {
  const errorPokemons = useSelector((state) => state.pokemons.error);
  const searchText = useSelector((state) => state.pokemons.searchText);
  const dispatch = useDispatch();

  const changeSearchText = (e) => {
    dispatch(setSearchText(e.target.value));
  }

  if (errorPokemons) {
    return <ErrorIndicator />
  }

  return (
    <div className="pokemon-page">
      <input className="search-pokemon form-control me-sm-2" type="text" 
          placeholder="Search for Pokemon" value={searchText}
          onInput={changeSearchText}>
        </input>
      <div className="pokemons-page-container">
        <Itemslist />
        <PokemonDetails />
      </div>
    </div>
  )
}

export default PokemonsPage;