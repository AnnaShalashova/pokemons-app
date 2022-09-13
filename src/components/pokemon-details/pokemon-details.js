import React, {useState, useEffect, useMemo, useCallback} from "react";

import SwapiService from "../../services";
import PokemonCard from "../pokemon-card";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import "./pokemon-details.css";

const PokemonItem = ({id}) => {
    console.log("Rendering PokemonItem");

    const defaultState = {};
    const [pokemonState, setPokemonState] = useState(defaultState);
    const [status, setStatus] = useState({loading: true, error: false});

    const swapiService = new SwapiService();

    useEffect(() => {
        updatePokemon();
    }, [id]);

    const updatePokemon = async () => {
        if (!id) {
            return;
        };

        const pokemon = await swapiService.getPokemon(id);
        const ability = await swapiService.getPokemonAbility(id);
        console.log(pokemon);
        if (!pokemon|| !ability) {
            console.log("error")
            setStatus({loading: false, error: true});
        }

        setPokemonState({ pokemon, ability  });
        setStatus({ loading: false, error: false });
    }


    if (!pokemonState.pokemon || !pokemonState.ability) {
        return (
            <div className="pokemon-details-container"> 
                
                <img className="imgPikaLook" alt="pika" src="https://avatanplus.com/files/resources/original/57eebd00a58cc1577c924aa6.png"></img>
                <div className="bs-component">
                    <div className="alert alert-dismissible alert-success">
                    Choose your pokemon to see details!
                    </div>
                </div>
            </div>
        )
    }

    if (status.loading) {
        return (
            <div className="spinner-container">
                <Spinner />
            </div>
        )
    }

    if (status.error) {
        return <ErrorIndicator />
    }

    return (
        <div className="pokemon-details-container pokemon-details card border-light mb-3">
            <div className="card-header">POKEMON CARD</div>
            {PokemonCard(id, pokemonState)} 
        </div>
    )
}  


export default React.memo(PokemonItem);


