import { BUY_ICECREAM } from "./icecreamTypes"


const initialState = {
    numCakes: 10,
    numIcreams: 20,
}

const iceCreamReducer =  (state = initialState,action) => {
    switch(action.type){
        case BUY_ICECREAM:
            return {
                ...state,
                numIcreams: state.numIcreams-1
            }
            default: return state
    }
}

export default iceCreamReducer