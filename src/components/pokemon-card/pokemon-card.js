import React from "react"
import { PokemonImage } from "../helpers/get-image";
import "./pokemon-card.css"

const PokemonCard = (id, pokemon, ability) => {

    return (
        <div className="card-body">
            <div className="container">
                <div>
                    <div>NAME: {pokemon.name.toUpperCase()}</div>
                    <div>HEIGHT: {pokemon.height}</div>
                    <div>WEIGHT: {pokemon.weight}</div>
                </div>
                {PokemonImage(id)}
            </div>
            
            <div className="ability">
                <p>ABILITY: {ability.name}</p>
                <p>{ability.effect_entries[1].effect}</p>
            </div>
        </div>
    )
}

export default PokemonCard;