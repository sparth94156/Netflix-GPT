import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name:'gpt',
    initialState: {
        gptSearchShow: false,
        gptMovies: null,
        gptResults: null,
        clientApi: null,
    },
    reducers: {
        toggleGptSearch: (state) => {
            state.gptSearchShow = !state.gptSearchShow
        },
        addGptMovies: (state,action) => {
            const {movieNames, movieResults} = action.payload
            state.gptMovies = movieNames
            state.gptResults = movieResults
        },
        clearGptMovies: (state,action) => {
            state.gptResults = null
            state.gptMovies = null
        },
        addUserApi: (state,action) => {
            state.clientApi = action.payload
        }
    }
})

export const {toggleGptSearch, addGptMovies, clearGptMovies, addUserApi} = GptSlice.actions;

export default GptSlice.reducer;