import { PokemonImage } from "../helpers/get-image";
import { useAppSelector } from "../hooks";
import { textLibrary } from "../languages";
import "./pokemon-card.css"

const PokemonCard = () => {
    const pokemon = useAppSelector((state) => state.pokemon.pokemon);
    const id = useAppSelector((state) => state.pokemon.pokemonId);
    const ability = useAppSelector((state) => state.pokemon.ability);
    
    const abilityName = ability.name;
    const abilityDetails = ability.effect_entries[1].effect;
    const pokemonId = id ? id : 0;
    
    const currentLng = useAppSelector((state) => state.language.language);
    const nameText = textLibrary[currentLng].name;
    const heightText = textLibrary[currentLng].height;
    const widthText = textLibrary[currentLng].width;
    const abilityText = textLibrary[currentLng].ability;

    return (
        <div className="card-body">
            <div className="container">
                <div>
                    <div>{nameText}: {pokemon.name.toUpperCase()}</div>
                    <div>{heightText}: {pokemon.height}</div>
                    <div>{widthText}: {pokemon.weight}</div>
                </div>
                {PokemonImage(pokemonId)}
            </div>
            
            <div className="ability">
                <p>{abilityText}: {abilityName}</p>
                <p>{abilityDetails}</p>
            </div>
        </div>
    )
}

export default PokemonCard;