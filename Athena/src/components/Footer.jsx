import React from 'react'

const Footer = (props) => {
  return (
    <div>
       {props.timeframe&&(
        <div>
             <h2>MULTI TIMEFRAME</h2>
        <div className='flex'>
            <h4>Timeframe</h4>
            <select name="source" className='ml-4 bg-transparent border-2 border-white text-white border-opacity-40 rounded' >
            <option value="OPEN">Chart</option>
          </select>
        </div>
        <div className='flex'>
        <input type="checkbox" />
        <h2>Wait for timeframe closes</h2>
        </div>
        </div>
       )}
       <div className='flex justify-between'>
            <div>
            <select name="source" className='ml-4 bg-transparent border-2 border-white text-white border-opacity-40 rounded' >
                <option value="Defaults">Defaults</option>
            </select>
            </div>
            <div>
            <button
              className='bg-white border-blue-700 text-blue-700 mt-4 py-2 px-4 rounded-lg'
              onClick={props.closeInnerModal}
            >
              Cancel
            </button>
            <button
              className='text-white bg-blue-700 mt-4 py-2 px-4 rounded-lg'
              onClick={props.closeInnerModal}
            >
              OK
            </button>
            </div>
        </div> 
    </div>
  )
}

export default Footer