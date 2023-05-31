import { createSlice } from "@reduxjs/toolkit";

const initialStateHome = {
    url: {},
    genres: {},
};
const homeSlice = createSlice({
    name: "Home",
    initialState: initialStateHome,
    reducers: {
        getApiConfiguration: (state, action) => {
            state.url = action.payload;
        },
        getGenres: (state, action) => {
            state.genres = action.payload;
        },
    },
});

export const homeSliceAction = homeSlice.actions;
export { homeSlice };
