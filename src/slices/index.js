import { configureStore } from "@reduxjs/toolkit";
import pokemonsReducer from "./pokemonsSlice";
import pokemonReducer from "./pokemonSlice";
import themeReducer from "./themeSlice";


export default configureStore({
    reducer: {
        pokemons: pokemonsReducer,
        pokemon: pokemonReducer,
        theme: themeReducer,
    },
});
