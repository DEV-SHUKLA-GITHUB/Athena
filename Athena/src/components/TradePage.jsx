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
const [selectedOption,setSelectedOption] = useState()
    const options=[
        1,2,3   
    ]
    const handleChange =() => {
        console.log(selectedOption)
    }
  return (
    <div className='bg-purple-950 w-full h-full'>
        <div className='text-white flex border-b-2'>
            <h2 className='flex m-10 pr-10 border-r-2 border-white'><AiOutlineSearch className='m-1.5'/> NIFTY</h2> 
            <h2 className='m-10 pr-10 border-r-2 '>15m</h2>
            <h2 className='m-10 pr-10 border-r-2 '><BiCandles/></h2>
            <h2 className='m-10 flex'><AiOutlineStock className='m-1.5'/> Indicators </h2>
        </div>
        <div className='flex h-full'>
            <div className='w-3/4'>
                <div className='border-2 m-10 mb-0 pl-10 border-white rounded-lg border-opacity-40 '>
                <img src={graph} className="logo react" alt="React logo" />
                </div>
                <div className='border-2 m-10 mt-4 p-6 border-white rounded-lg border-opacity-40'>
                <img src={chart} className="logo react" alt="React logo" />
                </div>
            </div>
            <div className='w-1/4 border-2 border-white rounded-lg border-opacity-40 m-4 ml-0 mt-10'>
                <Dropdown options={options} onChange={handleChange} value={selectedOption} placeholder="select a option"/>
            </div>
        </div>
    </div>
  )
}

export default TradePage