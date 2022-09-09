import React, {useState, useEffect} from "react";


import SwapiService from "../../services";
import Spinner from "../spinner";
import "./items-list.css";
import { PokemonImage } from "../helpers/get-image";
import ErrorIndicator from "../error-indicator/error-indicator";


const Itemslist = ({getPokemon, searchText}) => {
    console.log("ItemsList Rendering");

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
    
    if (status.loading) {
        return (
        <div className="spinner-items">
            <Spinner />
        </div>
        )
    };

    if (status.error) {
        return <ErrorIndicator />
    };

    return (
        <ul className="pokemons-list">
            {RenderPokemons(pokemonsList)}
        </ul>            
    )
};


export default React.memo(Itemslist);

