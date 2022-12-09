
export const PokemonImage = (id: number) => {
    const _imgBase = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
    
    return (
        <img alt={id.toString()} src={`${_imgBase}${id}.png`}></img>
    )
}
