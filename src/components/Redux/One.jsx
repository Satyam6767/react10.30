import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './counterSlice'

function One() {

    const count = useSelector((state)=> state.counter.value)
    const dispatch = useDispatch()


  return (
    <div style={{height:"240px", backgroundColor:"skyblue"}}>
        <h1>{count}</h1>
        <button onClick={()=> dispatch(increment())}>add to cart</button>
        <button onClick={()=> dispatch(decrement())}>remove from cart</button>
    </div>
  )
}

export default One