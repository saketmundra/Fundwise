import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: 'login',
    initialState:{
        value:false,
        userid:null,
    },
    reducers:{
        changeState(state,action){
            state.value=!state.value;
            state.userid=action.payload;
        }
    },
})
export const {changeState}=loginSlice.actions;