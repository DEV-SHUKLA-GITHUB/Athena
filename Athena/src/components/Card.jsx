import React from 'react'

const Card = (props) => {
  return (
    <div>
         <h4>{props.selected}</h4>
        <h2>Inputs</h2>
        <div>
          <div className='flex'>
            <h3>{props.label}</h3>
            {/* <div className='flex pt-6 justify-between'> */}
                  <select name="source" className='ml-4 bg-transparent border-2 border-white text-white border-opacity-40 rounded' >
                    <option value="OPEN">Defaults</option>
                  </select>
            {/* </div> */}
          </div>
        </div>
            <button
              className='text-white bg-blue-700 mt-4 py-2 px-4 rounded-lg'
              onClick={props.closeInnerModal}
            >
              OK
            </button>
    </div>
  )
}

export default Card