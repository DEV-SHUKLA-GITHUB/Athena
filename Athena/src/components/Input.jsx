import React from 'react'

const Input =(props)=>{
  return(
    <div className='flex'>
        <h3>{props.title}</h3>
        <input className='bg-transparent border-2 text-white border-white border-opacity-40 w-16 rounded' type="number" name="RSI lenght" placeholder="0" />
    </div>
  )
}

export default Input