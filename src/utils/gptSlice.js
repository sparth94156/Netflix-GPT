import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name:'gpt',
    initialState: {
        gptSearchShow: false
    },
    reducers: {
        toggleGptSearch: (state) => {
            state.gptSearchShow = !state.gptSearchShow
        }
    }
})

export const {toggleGptSearch} = GptSlice.actions;

export default GptSlice.reducer;