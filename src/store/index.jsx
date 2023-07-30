import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./loginslice";

const store =configureStore({
    reducer:{
        login:loginSlice.reducer,
    }
})

export default store;
