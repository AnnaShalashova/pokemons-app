import React, {useState, useEffect, useMemo} from "react";

import SwapiService from "../../services";
import Spinner from "../spinner";
import "./items-list.css";
import { PokemonImage } from "../helpers/get-image";

const Itemslist = ({getPokemon, searchText, error, setError}) => {

    const [pokemonsList, setPokemonsList] = useState([]);
    const [loading, setLoading] = useState(true);

    const swapiService = useMemo(() => new SwapiService(), []);

    useEffect(() => {
        swapiService.getAllPokemons()
        .then((pokemons) => {
            setPokemonsList(pokemons);
            setLoading(false)  
        })
        .catch((error) => {
            setLoading(false); 
            setError(true); 
            throw new Error(error);        
        });
    }, [error, setError, swapiService]);
   
    const renderPokemons = (arr) => {
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
    ), []);
    
    if (loading) {
        return renderSpinner
    };

    return (
        <>
        {/* {status.error && <ErrorIndicator resetPage={setReset(false)}/>} */}
        {/* {!status.error &&  */}
        <div className="pokemons-list-container">
            <ul className="pokemons-list">
                {renderPokemons(pokemonsList)}
            </ul>            
        </div>
        </>
    )
};

export default React.memo(Itemslist);

