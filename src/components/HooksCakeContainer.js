import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake, buyCup, buyIcecream} from '../redux'

export default function HooksCakeContainer() { 
    const numCakes = useSelector(state => state.cake.numCakes)
    const numIcreams = useSelector(state => state.iceCream.numIcreams)
    const numCup = useSelector(state => state.cup.numCup)
    const dispatch = useDispatch()
  return (
    <div>
        <h2>hooks --number of cakes-- {numCakes}</h2>
        <button onClick={()=>dispatch(buyCake())}> buy cake </button>
        <h2>hooks --number of ice-- {numIcreams}</h2>
        <button onClick={()=>dispatch(buyIcecream())}> buy Ice </button> 
        <h2>hooks --number of ice-- {numCup}</h2>
        <button onClick={()=>dispatch(buyCup())}> buy cupCake </button>
    </div>
  )
}