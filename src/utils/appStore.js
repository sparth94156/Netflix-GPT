import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'

// Build a store
export const appStore = configureStore({
    reducer: {
        user: userReducer
    }
})