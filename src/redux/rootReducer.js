import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import cupReducer from "./cupCake/cupReducer";
import { userReducer } from "./users/userReducer";

const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
    cup:cupReducer,
    user:userReducer
})

export default rootReducer