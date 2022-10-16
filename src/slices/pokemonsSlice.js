import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPokemons = createAsyncThunk(
    'pokemons/fetchPokemons',
    async () => {
        const pokemons = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=100');
        return pokemons.data.results;
    }
)

const initialState = {
    pokemons: [],
    searchText: "",
    loading: true,
    error: false
};

const pokemonsSlice = createSlice({
    name: "pokemons",
    initialState,
    reducers: {
        setError: (state) => { state.error = false },
        setSearchText: (state, action) => { 
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
                throw new Error("New error in getPokemons", error);
            })
            
    }

})

export const { setError, setSearchText } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;