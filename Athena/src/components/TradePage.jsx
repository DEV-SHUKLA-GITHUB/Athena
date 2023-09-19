import React from 'react'
import { useState } from 'react';
import {AiOutlineSearch} from 'react-icons/ai';
import {BiCandles} from 'react-icons/bi';
import {AiOutlineStock} from 'react-icons/ai';
import graph from '../assets/graph.svg'
import Dropdown from "react-dropdown"
// import 'react-dropdown/styles.css'
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

  const openInnerModal = (option) => {
    setSelectedOption(option);
    setIsInnerModalOpen(true);
  };

  const closeInnerModal = () => {
    setIsInnerModalOpen(false);
  };

  const indicatorOptions = [
    '24-hour Volume',
    'Accumulation/Distribution',
    'Advance Decline Line',
    'Advance Decline Ratio',
    'Advance/Decline Ration (Bars)',
    'Arnaud Legoux Moving Average',
    'Aroon',
    'Auto Fib Extension',
    'Auto Fib Retracement',
    'Auto Pitchfork',
    'Average Day Range',
    'Average Direction Index',
    'Average True Range',
    'Awesome Oscillator',
    'Balance of Power',
    'Bollinger Bands',
    'Bollinger Bands %B',
    'Bollinger Bands Width',
    'Bull Bear Power',
    'Chaikin Money Flow',
    'Chaikin Oscillator',
    'Chande Kroll Stop',
    'Chande Momentum Oscillator',
    'Chop Zone',
    'Choppiness Index',
    'Commodity Channel Index',
    'Connors RSI',
    'Coppock Curve',
    'Correlation Coefficient',
    'Comulative Volume Index',
    'Detrended Price Oscillator',
    'Directional Movement Index',
    'Divergence Indicator',
    'Donchian Channels',
    'Double EMA',
    'Ease of Movement',
    'Elder Force Index',
    'Envelope',
    'Fisher Transform',
    'Gaps',
    'Historical Volatility',
    'Hull moving Average',
    'Ichimoku Cloud',
    'Keltner Channels',
    'Klinger Oscillator',
    'Know Sure Thing',
    'Least Squares Moving Average',
    'Linear Regression Channel',
    'MA Cross',
    'Mass Index',
    'McGinley Dynamic',
    'Median',
    'Momentum',
    'Money Flow Index',
    'Moon Phases',
    'Moving Average Convergence Divergence',
    'Moving Average Exponential',
    'Moving Average Ribbon',
    'Moving Average Simple',
    'Moving Average Weighted',
    'Multi-Time Period Charts',
    'Net Volume',
    'On Balance Volume',
    'Open Interest',
    'Parabolic SAR',
    'Pivot Points High Low',
    'Pivot Points Standard',
    'Price Oscillator',
    'Price Volume Trend',
    'Rate of Change',
    'Relative Strength Index',
    'Relative Vigor Index',
    'Relative Volatility Index',
    'Relative Volume at Time',
    'Rob Booker - Intraday Pivot points',
    'Rob Booker - Knoxville Divergence',
    'Rob Booker - Missed Pivot Points',
    'Rob Booker - Reversal',
    'Rob Booker - Ziv Ghost Pivots',
    'SMI Ergodic Indicator',
    'SMI Ergodic Oscillator',
    'Smoothed Moving Average',
    'Stochastic',
    'Stochastic Momentum Index',
    'Stochastic RSI',
    'Supertrend',
    'Technical Ratings',
    'Time Weighted Average Price',
    'Triple EMA',
    'TRIX',
    'True Strength Index',
    'Ultimate Oscillator',
    'Up/Down Volume',
    'Visible Average Price',
    'Volatility Stop',
    'Volume',
    'Volume Oscillator',
    'Volume Weighted Average Price',
    'Volume Weighted Moving Average',
    'Vortex Indicator',
    'VWAP Auto Anchored',
    'Williams Alligator',
    'Williams Fractals',
    'Williams Percent Range',
    'Woodies CCI',
    'Zig Zag'
  ];
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
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="relative w-96 h-80 rounded-lg p-4">
            <h3 className="text-white mb-2">Select an Indicator</h3>
            {indicatorOptions.map((option, index) => (
              <div
                key={index}
                className="text-white mb-2 cursor-pointer"
                onClick={() => openInnerModal(option)}
              >
                {option}
              </div>
            ))}
            <button
              className="text-white bg-blue-700 mt-4 py-2 px-4 rounded-lg"
              onClick={closeModal}
            >
              OK
            </button>
          </div>
        </div>
      )}

      {isInnerModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="relative bg-white w-96 h-80 rounded-lg p-4">
            <h3 className="text-white mb-2">Selected Option: {selectedOption}</h3>
            <button
              className="text-white bg-blue-700 mt-4 py-2 px-4 rounded-lg"
              onClick={closeInnerModal}
            >
              OK
            </button>
          </div>
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