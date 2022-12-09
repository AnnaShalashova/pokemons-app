import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export enum Language {
    EN = "EN",
    RU = "RU"
}

type ILanguageState = {
    language: Language
}

const getLenguage = (): Language => {
    const ln = `${window?.localStorage?.getItem("lenguage")}`;
    if (ln === Language.EN || ln === Language.RU) {
        return ln;
    }
    return Language.EN;
};

const initialState: ILanguageState = {
    language: getLenguage()
};

const languagesSlice = createSlice({
    name: "lenguage",
    initialState,
    reducers: {
        setLenguage: (state, action:PayloadAction<Language>) => { state.language = action.payload }
    }
});

export const { setLenguage } = languagesSlice.actions;
export default languagesSlice.reducer;