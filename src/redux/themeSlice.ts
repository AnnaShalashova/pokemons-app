import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';

interface IThemeState<T> {
    theme: T
}

export enum Theme {
    LIGHT = "light",
    DARK = "dark"
}

const getTheme = (): Theme => {
    const theme = `${window?.localStorage?.getItem("theme")}`;
    if (theme === Theme.DARK || theme === Theme.LIGHT) {
        return theme;
    }
    return Theme.LIGHT;
};

const initialState: IThemeState<Theme> = {
    theme: getTheme()
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        set: (state, action:PayloadAction<Theme>) => { state.theme = action.payload },
    }
});

export const { set } = themeSlice.actions;
export default themeSlice.reducer;