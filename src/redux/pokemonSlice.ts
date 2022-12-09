import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from "axios";


interface IPokemonState {
    pokemon: any,
    pokemonId: number | null,
    ability: any,
    loading: {
        pokemon: boolean,
        ability: boolean
    },
    error: null | object
}

export const getPokemon = createAsyncThunk<any, number>(
    'pokemon/fetchPokemon',
    async (id) => {
        const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return pokemon.data;
    }
)

export const getPokemonAbility = createAsyncThunk<any, number>(
    'pokemon/fetchPokemonAbility',
    async (id) => {
        const pokemonAbility = await axios.get<object>(`https://pokeapi.co/api/v2/ability/${id}`);
        return pokemonAbility.data;
    }
)

const initialState: IPokemonState = {
    pokemon: null,
    pokemonId: null,
    ability: {},
    loading: {pokemon: true, ability: true},
    error: null
};

const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        setPokemonId: (state, action: PayloadAction<number>) => {
            state.pokemonId = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPokemon.fulfilled, (state, { payload }) => {
                state.pokemon = payload;
                state.loading.pokemon = false;
            })
            .addCase(getPokemon.pending, (state) => {
                state.loading.pokemon = true;
            })
            .addCase(getPokemon.rejected, (state, { error }) => {
                state.error = error;
                throw new Error(`Error in getPokemon, ${ error }`);
            })
            .addCase(getPokemonAbility.fulfilled, (state, { payload }) => {
                state.ability = payload;
                state.loading.ability = false;
            })
            .addCase(getPokemonAbility.pending, (state) => {
                state.loading.ability = true;
            })
            .addCase(getPokemonAbility.rejected, (state, { error }) => {
                state.error = error;
                throw new Error(`Error in getPokemonAbility, ${error}`);
            })
    }
})

export const { setPokemonId } = pokemonSlice.actions;
export default pokemonSlice.reducer;