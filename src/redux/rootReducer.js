import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import cupReducer from "./cupCake/cupReducer";

const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
    cup:cupReducer,
})

export default rootReducer