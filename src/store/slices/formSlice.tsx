import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
    name: 'form',
    initialState: {
        description: ''
    },
    reducers: {
        changeDescription(state, action) {
            state.description = action.payload;
        }
    }
});

export const { changeDescription } = formSlice.actions;

export const formReducer = formSlice.reducer;