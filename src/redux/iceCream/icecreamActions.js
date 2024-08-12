import { BUY_ICECREAM } from "./icecreamTypes"

export const buyIcecream = (num = 1) => {
    return {
        type: BUY_ICECREAM,
        payload: num
    }
}