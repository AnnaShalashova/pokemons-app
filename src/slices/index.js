import { configureStore } from "@reduxjs/toolkit";
import pokemonsReducer from "./pokemonsSlice";
import pokemonReducer from "./pokemonSlice";


export default configureStore({
    reducer: {
        pokemons: pokemonsReducer,
        pokemon: pokemonReducer
    },
});
