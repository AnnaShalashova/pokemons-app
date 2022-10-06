import React, {useState, useEffect, useMemo} from "react";

import SwapiService from "../../services";
import Spinner from "../spinner";
import "./items-list.css";
import { PokemonImage } from "../helpers/get-image";
import ErrorIndicator from "../error-indicator/error-indicator";


const Itemslist = ({getPokemon, searchText}) => {

    const [pokemonsList, setPokemonsList] = useState([]);
    const [status, setStatus] = useState({loading: true, error: false});

    const swapiService = new SwapiService();

    useEffect(() => {
        swapiService.getAllPokemons()
        .then((pokemons) => {
            setPokemonsList(pokemons);
            setStatus({loading: false, error: false})    
        })
        .catch((error) => {
            setStatus({loading: false, error})
        });
    }, []);
   
    const RenderPokemons = (arr) => {
       return arr.map((pokemon) => {
            const {name, url} = pokemon;
            let id = url.match(/\/(\d+)\/$/)[1];
            const img = PokemonImage(id);

            if (name.includes(searchText)) {
                return (
                    <li className="li-pokemon card border-info mb-3"
                        key={id} onClick={() => getPokemon(id)}>
                            <div className="card-header">{name.toUpperCase()}</div>
                            <div className="card-body">{img}</div>
                    </li>
                )
            }
            
        })
    };

    const renderSpinner = useMemo(() =>  (
        <div className="spinner-items">
            <Spinner />
        </div>
        ), [])
    
    if (status.loading) {
        return renderSpinner
    };

    return (
        <>
        {status.error && <ErrorIndicator />}
        {!status.error && 
        <div className="pokemons-list-container">
            <ul className="pokemons-list">
                {RenderPokemons(pokemonsList)}
            </ul>            
        </div>}
        </>
    )
};

export default React.memo(Itemslist);

