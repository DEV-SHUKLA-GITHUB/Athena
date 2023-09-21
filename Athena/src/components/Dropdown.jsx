import React from 'react'

const Dropdown =(props)=>{
  return(
    <div className='flex'>
    <h3>{props.label}</h3>
    {/* <div className='flex pt-6 justify-between'> */}
          <select name="source" className='ml-4 bg-transparent border-2 border-white text-white border-opacity-40 rounded' >
            <option value="OPEN">{props.option}</option>
          </select>
    {/* </div> */}
  </div>
  )
}

export default Dropdown