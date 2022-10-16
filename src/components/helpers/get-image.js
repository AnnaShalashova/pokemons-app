import React from "react";

const PokemonImage = (id) => {
    const _imgBase = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
    
    return (
        <img alt={id} src={`${_imgBase}${id}.png`}></img>
    )
    
}

export { PokemonImage };