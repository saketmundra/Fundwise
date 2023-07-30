import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: 'login',
    initialState:{
        value:false
    },
    reducers:{
        changeState(state,action){
            state.value=!state.value;
        }
    },
})
export const {changeState}=loginSlice.actions;