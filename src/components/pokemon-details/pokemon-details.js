import React, { useEffect} from "react";
import { useSelector } from "react-redux";
import { getPokemon } from "../../slices/pokemonSlice";

import PokemonCard from "../pokemon-card";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import "./pokemon-details.css";

const PokemonDetails = () => {
    const pokemon = useSelector((state) => state.pokemon.pokemon);
    const ability = useSelector((state) => state.pokemon.ability);
    const loading = useSelector((state) => state.pokemon.loading);
    const error = useSelector((state) => state.pokemon.error);
    const theme = useSelector((state) => state.theme.theme);

    useEffect(() => {
        getPokemon();
    }, [pokemon]);


    if (!pokemon || !ability) {
        return (
            <div>
                <div className={`arrow-left arrow-${theme}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="pokemon-details-container"> 
                    <img className="imgPikaLook" width="250px" alt="Pikachu" src="https://avatanplus.com/files/resources/original/57eebd00a58cc1577c924aa6.png"></img>
                    <p className={`pokemon-details-text text-${theme}`}>Choose your pokemon to see details!</p>
                </div>
            </div>
        )
    }



    if (loading.pokemon || loading.ability) {
        
        return (
            <div className={`pokemon-details-container pokemon-details card border-light mb-3 card-body-${theme}`}>
                <div className="card-header">POKEMON CARD</div>
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
        <div className={`pokemon-details-container pokemon-details card border-light mb-3 card-body-${theme}`}>
            <div className="card-header">POKEMON CARD</div>
            <PokemonCard />
        </div>
    )
}  


export default React.memo(PokemonDetails);


