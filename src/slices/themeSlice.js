import { createSlice } from "@reduxjs/toolkit";

const getTheme = () => {
    const theme = `${window?.localStorage?.getItem("theme")}`;
    if (["light", "dark"].includes(theme)) return theme;

    return "light";
};

const initialState = {theme: getTheme()};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        set: (state, action) => { state.theme = action.payload },
    }
});

export const { set } = themeSlice.actions;

export default themeSlice.reducer;