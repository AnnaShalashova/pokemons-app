import React, {useEffect, useMemo} from "react";
import Spinner from "../spinner";
import "./items-list.css";
import { PokemonImage } from "../helpers/get-image";
import { getPokemons } from "../../redux/pokemonsSlice";
import { getPokemon, getPokemonAbility, setPokemonId} from "../../redux/pokemonSlice";
import { useAppSelector, useAppDispatch } from "../hooks";

const Itemslist = () => {
    const loading = useAppSelector((state) => state.pokemons.loading);
    const pokemonsList = useAppSelector((state) => state.pokemons.pokemons);
    const searchText = useAppSelector((state) => state.pokemons.searchText)
    const theme = useAppSelector((state) => state.theme.theme);
    const dispatch = useAppDispatch();  

    useEffect(() => {
        dispatch(getPokemons());
    }, []);

    const getPokemonWithAbility = (id: number) => {
        dispatch(getPokemon(id));
        dispatch(getPokemonAbility(id));
        dispatch(setPokemonId(id));
    }
   
    const renderPokemons = (arr: Array<any>) => {
       return arr.map((pokemon) => {
            const {name, url} = pokemon;
            let id = url.match(/\/(\d+)\/$/)[1];
            const img = PokemonImage(id);

            if (name.includes(searchText)) {
                return (
                    <li className={`li-pokemon card border-info mb-3 li-${theme}`}
                        key={id} onClick={() => getPokemonWithAbility(id)}>
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
        return  (
        <div className="pokemons-list-container">
            {renderSpinner}
        </div>
    )}    

    return (
        <div className={`pokemons-list-container pokemons-list-${theme}`}>
            <ul className="pokemons-list">
                {renderPokemons(pokemonsList)}
            </ul>            
        </div>
    )
};

export default React.memo(Itemslist);

