import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../redux/counterSlice'

const Counterr = () => {
  const[amount,setAmount]=useState(0)
const {count}=useSelector(state=>state.counterReducer)
const dispatch=useDispatch()

const handleIncrementAmount=()=>
{
  if(amount)
  {
     dispatch(incrementByAmount(amount))
  }
  else{
    alert("Enter a valid Amount")
  }
}

  return (
    <div className='border rounded p-5 text-center'>
        <h1 style={{ fontSize:'100px'}}>{count}</h1>
        <div className="d-flex justify-content-between my-5" style={{width:'500px'}}>
            <button onClick={()=>dispatch(decrement())} className='btn btn-warning text-light'>Decrement</button>
            <button onClick={()=>dispatch(reset())}  className='btn btn-danger text-light'>Reset</button>
            <button onClick={()=>dispatch(increment())} className='btn btn-success text-light'>Increment</button>
        </div>
        <div className="d-flex align-items-center justify-content-center">
            <input onChange={e=>setAmount(e.target.value)} type="text" placeholder='Input amount to be incremented'  className='form-control'/>
            <button onClick={handleIncrementAmount} className='btn btn-primary ms-3'>Increment by Amount</button>
            
        </div>
    </div>
  )
}

export default Counterr