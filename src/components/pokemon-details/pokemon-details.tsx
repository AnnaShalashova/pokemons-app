import React from "react";
import { useAppSelector } from "../hooks";
import PokemonCard from "../pokemon-card";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import { textLibrary } from "../languages";
import "./pokemon-details.css";

const PokemonDetails = () => {
    const pokemon = useAppSelector((state) => state.pokemon.pokemon);
    const ability = useAppSelector((state) => state.pokemon.ability);
    const loading = useAppSelector((state) => state.pokemon.loading);
    const error = useAppSelector((state) => state.pokemon.error);
    const theme = useAppSelector((state) => state.theme.theme);

    const currentLng = useAppSelector((state) => state.language.language);
    const chooseYourPokemon = textLibrary[currentLng].choose;
    const pokemonCardText = textLibrary[currentLng].pokemonCard;

    if (!pokemon || !ability) {
        return (
            <div>
                <div className={`arrow-left arrow-${ theme }`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="pokemon-details-container"> 
                    <img className="imgPikaLook" width="250px" alt="Pikachu" src="https://avatanplus.com/files/resources/original/57eebd00a58cc1577c924aa6.png"></img>
                    <p className={`pokemon-details-text text-${ theme }`}>{ chooseYourPokemon }</p>
                </div>
            </div>
        )
    }

    if (loading.pokemon || loading.ability) {
        return (
            <div className={`pokemon-details-container pokemon-details card border-light mb-3 card-body-${ theme }`}>
                <div className="card-header">{ pokemonCardText }</div>
                <div className="spinner-container">
                    <Spinner />
                </div>
            </div>
        )
    }

    if (error) {
        return <ErrorIndicator />
    }
 
    return (
        <div className={`pokemon-details-container pokemon-details card border-light mb-3 card-body-${ theme }`}>
            <div className="card-header">{ pokemonCardText }</div>
            <PokemonCard />
        </div>
    )
}  

export default React.memo(PokemonDetails);


