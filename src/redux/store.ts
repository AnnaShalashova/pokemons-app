import { configureStore } from '@reduxjs/toolkit'
import pokemonsReducer from "./pokemonsSlice";
import pokemonReducer from "./pokemonSlice";
import themeReducer from "./themeSlice";
import languagesReducer from "./languagesSlice";

export const store = configureStore({
    reducer: {
        pokemons: pokemonsReducer,
        pokemon: pokemonReducer,
        theme: themeReducer,
        language: languagesReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
