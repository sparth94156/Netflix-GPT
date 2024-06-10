import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'default',
    initialState: null,
    reducers: {
        addUser: (state,action) => {
            return action.payload   // returns to the initialState
        },
        removeUser: (state,action) => {
            return null
        }
    }
})

// destructuring 
export const {addUser, removeUser} = userSlice.actions;

export default userSlice.reducer    // exporting the whole reducer 