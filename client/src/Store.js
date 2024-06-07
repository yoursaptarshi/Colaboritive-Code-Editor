import {configureStore} from "@reduxjs/toolkit";

import { userReducer } from "./Reducers/userReducer";
import { codeReducer } from "./Reducers/codeReducer";


const store = configureStore({
    reducer:{
        user:userReducer,
        code:codeReducer
    }
})

export default store;