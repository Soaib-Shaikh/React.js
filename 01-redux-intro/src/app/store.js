import { configureStore } from "@reduxjs/toolkit";
import counterReducer  from "../features/counterSlice"

const store = configureStore({
    reducer : {
        count : counterReducer
    }
})

export default store;