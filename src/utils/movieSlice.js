import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPLayingMovies: null,
        movieTrailer: null,
        nowPopularMovies: null,
        nowTopRatedMovies: null,
        nowUpcomingMovies: null
    },
    reducers: {
        addMovie: (state,action) => {
            state.nowPLayingMovies = action.payload
        },
        removeMovie: (state,action) => {
            state.nowPLayingMovies = null;
        },
        addPopularMovies: (state,action) => {
            state.nowPopularMovies = action.payload
        },
        addTopRatedMovies: (state,action) => {
            state.nowTopRatedMovies = action.payload
        },
        addUpcomingMovies: (state,action) => {
            state.nowUpcomingMovies = action.payload
        },
        addTrailer: (state,action) => {
            state.movieTrailer = action.payload;
        }
    }
})

export const { addMovie, removeMovie, addTrailer, addPopularMovies, addTopRatedMovies, addUpcomingMovies } = movieSlice.actions;

export default movieSlice.reducer;
