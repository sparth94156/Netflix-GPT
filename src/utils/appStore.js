import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import movieReducer from './movieSlice'

// Build a store
export const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: movieReducer,
    }
})