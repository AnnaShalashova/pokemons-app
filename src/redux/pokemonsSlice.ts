import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from "axios";

export const getPokemons = createAsyncThunk<Array<any>>(
    'pokemons/fetchPokemons',
    async () => {
        const pokemons = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=100');
        return pokemons.data.results;
    }
)

export interface IPokemonsState {
    pokemons: object[],
    searchText: string,
    loading: boolean,
    error: null | object
}

const initialState: IPokemonsState = {
    pokemons: [],
    searchText: "",
    loading: true,
    error: null
};

const pokemonsSlice = createSlice({
    name: "pokemons",
    initialState,
    reducers: {
        setError: (state) => { state.error = null },
        setSearchText: (state, action: PayloadAction<string>) => { 
            state.searchText = action.payload 
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPokemons.fulfilled, (state, { payload }) => {
                state.pokemons = payload;
                state.loading = false;
            })
            .addCase(getPokemons.rejected, (state, { error }) => {
                state.error = error;
                throw new Error(`New error in getPokemons, ${error}`);
            })
    }

})

export const { setError, setSearchText } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;