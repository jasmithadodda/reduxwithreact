import { BUY_CUP } from "./cupTypes"

const initialState = {
    numCakes: 10,
    numIcreams: 20,
    numCup : 20,
}

const cupReducer =  (state = initialState,action) => {
    switch(action.type){
        case BUY_CUP:
            return {
                ...state,
                numCup: state.numCup-1
            }
            default: return state
    }
}

export default cupReducer