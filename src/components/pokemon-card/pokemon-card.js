import React from "react"
import { PokemonImage } from "../helpers/get-image";
import { useSelector } from "react-redux";
import "./pokemon-card.css"

const PokemonCard = () => {
    const pokemon = useSelector((state) => state.pokemon.pokemon);
    const pokemonId = useSelector((state) => state.pokemon.pokemonId);
    const ability = useSelector((state) => state.pokemon.ability);
   
    const abilityName = ability.name;
    const abilityDetails = ability.effect_entries[1].effect;

    return (
        <div className="card-body">
            <div className="container">
                <div>
                    <div>NAME: {pokemon.name.toUpperCase()}</div>
                    <div>HEIGHT: {pokemon.height}</div>
                    <div>WEIGHT: {pokemon.weight}</div>
                </div>
                {PokemonImage(pokemonId)}
            </div>
            
            <div className="ability">
                <p>ABILITY: {abilityName}</p>
                <p>{abilityDetails}</p>
            </div>
        </div>
    )
}

export default PokemonCard;