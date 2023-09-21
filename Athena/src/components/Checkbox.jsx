import React from 'react'

const Checkbox = (props) => {
  return (
    <div className='flex'>
        <input type="checkbox" />
        <h2>{props.checkVal}</h2>
    </div>
  )
}

export default Checkbox