import React from 'react'
import { useState } from 'react';
import {AiOutlineSearch} from 'react-icons/ai';
import {BiCandles} from 'react-icons/bi';
import {AiOutlineStock} from 'react-icons/ai';
import graph from '../assets/graph.svg'
import Card from './Card';
import indicatorOptions from '../data/data';
import chart from '../assets/fullchart.svg'
const TradePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [isInnerModalOpen, setIsInnerModalOpen] = useState(false);

  const handleIndicatorClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const closeInnerModal = () => {
    setIsInnerModalOpen(false);
    console.log("hello")
  };


  const handleClick =() => {
    setIsInnerModalOpen(!isInnerModalOpen)
    console.log(selectedOption)
  }
  return (
    <div className='bg-[#261E35] w-full h-full'>
  <div className='text-white flex h-16 border-b-2 border-white border-opacity-40'>
  <h2 className='flex m-4 pr-10 border-r-2 border-white'>
    <AiOutlineSearch className='m-1.5'/> NIFTY
  </h2> 
  <h2 className='flex m-4 pr-10 border-r-2 '>15m</h2>
  <h2 className='flex m-4 pr-10 border-r-2 '><BiCandles className='mt-1.5'/></h2>
  <h2 className="flex m-4" onClick={handleIndicatorClick}>
        <AiOutlineStock className="m-1.5" /> Indicators
      </h2>
      {isModalOpen && (
        <div className='fixed h-screen inset-0 flex items-center justify-center z-50'>
          <div className='absolute opacity-70'></div>
          <div className='w-1/4 border-2 border-white rounded-lg border-opacity-40 p-4 m-4'>
            <div className='h-80 overflow-y-auto overflow-hidden scrollbar-thin scrollbar-thumb-gray-400'>
              <h3 className='text-white mb-2'>Select an Indicator</h3>
              {indicatorOptions.map((option, index) => (
                <div
                  key={index}
                  className='text-white mb-2 cursor-pointer'
                  onClick={() => {
                    setSelectedOption(option);
                    closeModal();
                  }}
                >
                  {option}
                </div>
              ))}
            </div>
            <button
              className='text-white bg-blue-700 mt-4 py-2 px-4 rounded-lg'
              onClick={closeModal}
            >
              OK
            </button>
          </div>
        </div>
      )}
        <div className='pt-4'>
            <h6 className='size-8 text-white opacity-60'>Selected Option:</h6>
            <div className='text-white'>{selectedOption} <span><button className='border rounded-lg bg-blue-600 ml-4' onClick={handleClick}>click me </button></span></div>
          </div>

          {isInnerModalOpen && (
              <div className='text-white insert-0 z-50'>
                {selectedOption === '24-hour Volume' && (
                  <Card
                    selected={selectedOption}
                    label={"price Source"}
                    label2={"Target Currency"}
                    option2={"Default"}
                    option={"Close"}
                    closeInnerModal={closeInnerModal}
                  />
                )}
                {selectedOption === 'Accumulation/Distribution' && (
                  <Card
                    selected={selectedOption}
                    timeframe={"ok"}
                    closeInnerModal={closeInnerModal}
                  />
                )}
                {selectedOption === 'Arnaud Legoux Moving Average' && (
                  <Card
                    selected={selectedOption}
                    input={"ok"}
                    title={"Window Size"}
                    title2={"Offset"}
                    title3={"Sigma"}
                    timeframe={"ok"}
                    closeInnerModal={closeInnerModal}
                  />
                )}
                {selectedOption === 'Advance/Decline Ration (Bars)' || "Aroon" && (
                  <Card
                    selected={selectedOption}
                    input={"ok"}
                    title={"Length"}
                    timeframe={"ok"}
                    closeInnerModal={closeInnerModal}
                  />
                )}
                {selectedOption === 'Advance/Decline Ration (Bars)' || "Aroon" && (
                  <Card
                    selected={selectedOption}
                    input={"ok"}
                    checkbox={"ok"}
                    checkVal={"Reverse"}
                    checkVal2={"Extend Left"}
                    checkVal3={"Extend Right"}
                    checkVal4={"Show Prices"}
                    dropdown={"ok"}
                    label={"Labels Position"}
                    option={"Left"}
                    title={"Background Transparency"}
                    closeInnerModal={closeInnerModal}
                  />
                )}
              </div>            
    )}

    </div>

        <div className='flex h-full'>
            <div className='w-3/4'>
                <div className='border-2 m-10 mb-0 pl-16 border-white rounded-lg border-opacity-40 '>
                <img src={graph} className="logo react" alt="React logo" />
                </div>
                <div className='border-2 m-10 mt-4 p-6 pl-20 border-white rounded-lg border-opacity-40'>
                <img src={chart} className="logo react" alt="React logo" />
                <div className='flex justify-between'>
                  <div className='flex'>
                   <div className='flex pt-4'>
                   <input type="checkbox" />
                    <h5 className='text-white pl-2'>Equity</h5>
                   </div>
                   <div className='flex pt-4 pl-4'>
                   <input type="checkbox" />
                    <h5 className='text-white pl-2'>Drowdown</h5>
                   </div>
                   <div className='flex pt-4 pl-4'>
                   <input type="checkbox" />
                    <h5 className='text-white pl-2'>Buy & hold equity</h5>
                   </div>
                  </div>
                  <div>
                    <div>
                      <button className='text-white pl-4 pr-4 bg-white bg-opacity-40 rounded '>Absolute</button>
                      <button className='text-white pl-4 pr-20  pt-4'>Percentage</button>
                    </div>
                  </div>
                </div>
                </div>
            </div>
            <div className='w-1/4 border-2 border-white justify-center  rounded-lg border-opacity-40 p-8 pt-0 m-4 ml-0 mt-10'>
            <select name="Select options" className='border-white border-2 text-white border-opacity-40 bg-transparent w-full rounded h-8 mt-6 ' placeholder='select options'>
              <option className='bg-[#261E35] text-white opacity-40' value="RSI">RSI</option>
              <option className='bg-[#261E35] text-white opacity-40' value="24-hour Volume">24-hour Volume</option>
              <option className='bg-[#261E35] text-white opacity-40' value="Accumulation/Distribution">Accumulation/Distribution</option>
              <option className='bg-[#261E35] text-white opacity-40' value="Advance Decline Line">Advance Decline Line</option>
              <option className='bg-[#261E35] text-white opacity-40' value="Advance Decline Ratio">Advance Decline Ratio</option>
              <option className='bg-[#261E35] text-white opacity-40' value="Aroon">Aroon</option>
              </select>
              <h6 className='size-8 text-white opacity-60 pt-4'>RSI setting</h6>
              <div className='pt-2 pl-4'>
                <div className='flex'>
                  <h4 className='w-32 text-white'>RSI Length</h4>
                  <input className='bg-transparent border-2 text-white border-white border-opacity-40 w-16 rounded' type="number" name="RSI lenght" placeholder="0" />
                </div>
                <div className='flex pt-2'>
                  <h4 className='w-32 text-white'>Source</h4>
                  <select name="source" className='bg-transparent border-2 border-white text-white border-opacity-40 rounded' >
                    <option className='bg-[#261E35] text-white' value="OPEN">OPEN</option>
                    <option className='text-black' value="CLOSE">CLOSE</option>
                  </select>
                </div>
              </div>
              <h6 className='size-8 text-white opacity-60 pt-8'>MA setting</h6>
              <div className='pt-2 pl-4'>
                <div className='flex'>
                  <h4 className='w-32 text-white'>MA Type</h4>
                  <select name="source" className='bg-transparent border-2 border-white text-white border-opacity-40 rounded' >
                    <option value="OPEN">SMA</option>
                  </select>
                </div>
                <div className='flex pt-2'>
                  <h4 className='w-32 text-white'>MA Length</h4>
                  <input className='bg-transparent border-2 text-white border-white border-opacity-40 w-16 rounded' type="number" name="RSI lenght" placeholder="0" />
                </div>
                <div className='flex pt-2'>
                  <h4 className='w-32 text-white'>BB stdDev</h4>
                  <input className='bg-transparent border-2 text-white border-white border-opacity-40 w-16 rounded' type="number" name="RSI lenght" placeholder="0" />
                </div>
              </div>
              <h6 className='size-8 text-white opacity-60 pt-32'>Multi Timeframe</h6>
              <div className='pt-2 pl-4'>
                <div className='flex'>
                  <h4 className='w-32 text-white'>Timeframe</h4>
                  <select name="source" className='bg-transparent border-2 border-white text-white border-opacity-40 rounded' >
                    <option value="OPEN">Chart</option>
                  </select>
                </div>
              </div>
              <div className='pt-6 flex'>
                <input type="checkbox" className='' />
                <h4 className='text-white pl-6'>wait for Timeframe closes</h4>
              </div>
              <div className='flex pt-6 justify-between'>
                  <select name="source" className='bg-transparent border-2 border-white text-white border-opacity-40 rounded' >
                    <option value="OPEN">Defaults</option>
                  </select>
                 <div>
                 <button className='text-white border-2 p-2 rounded-lg border-blue-800'>Cancel</button>
                  <button className='text-white border-2 p-2 rounded-lg bg-blue-700 border-blue-800 ml-4'>ok</button>
                 </div>
              </div>
        </div>
    </div>
    </div>
  )
}

export default TradePage