import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPLayingMovies: null,
        movieTrailer: null,
    },
    reducers: {
        addMovie: (state,action) => {
            state.nowPLayingMovies = action.payload;
        },
        removeMovie: (state,action) => {
            state.nowPLayingMovies = null;
        },
        addTrailer: (state,action) => {
            state.movieTrailer = action.payload;
        }
    }
})

export const { addMovie, removeMovie, addTrailer } = movieSlice.actions;

export default movieSlice.reducer;
