import React from 'react'
import stat1 from '../assets/stat1.png'
import stat2 from '../assets/stat2.png'
const Stats = () => {
  return (
    <div className='flex'>
        <div className='w-1/5 border h-screen p-8 bg-[#291B43] flex-col items-between'>
           <div>
           <h5 className='text-white opacity-40 '>Primary Options</h5>
            <button className='text-white p-3 w-full rounded-lg mt-6 bg-gradient-to-t from-[#A47CF3] to-[#683FEA] shadow-lg'>Dashboard</button>
            <button className='text-white p-3 w-full rounded-lg mt-6'>Strategies</button>
            <button className='text-white p-3 w-full rounded-lg mt-6'>API Binding</button>
            <button className='text-white p-3 w-full rounded-lg mt-6'>Subscription</button>
            <h5 className='text-white opacity-40 mt-20 '>Max Options</h5>
            <button className='text-white p-3 w-full rounded-lg mt-6'>FAQ's</button>
            <button className='text-white p-3 w-full rounded-lg mt-6'>Setting</button>
            <button className='text-white p-3 w-full rounded-lg mt-6'>Support</button>
           </div>
           <div>
            <h5 className='text-white'>Logout</h5>
           </div>
        </div>
        <div className='w-4/5 border h-full bg-[#261E35]'>
            <div className='flex justify-end border'>
                <div></div>
                <div>
                    <h6 className='p-2 text-white'>Administrator</h6>
                    <h6 className='p-2 text-white'>Degen Money</h6>
                </div>
                <div></div>
            </div>
            <div className='p-8 text-white' >
                <h6>Good Afternoon</h6>
                <div className='flex justify-between'>
                    <h2 className='pt-4'>Top 1% Gang</h2>
            <button className='text-white p-3 mr-20 rounded-lg mt-6 bg-gradient-to-t from-[#A47CF3] to-[#683FEA] shadow-lg'>Import all Trades</button>
                </div>
                <div className='flex'>
                    <div className='text-white p-3 w-3/12 h-22 m-4 rounded-lg mt-6 bg-white bg-opacity-20'>
                        <span className='block'>Net P&L</span>
                        <span className='block mt-2'>248,78</span>
                    </div>
            <button className='text-white p-3 m-4 rounded-lg h-16 mt-12 w-1/5 mt-6 bg-[#EB5757]'>Close all Positions</button>
            <button className='p-3 m-4 rounded-lg h-16 mt-12 w-1/5 mt-6 bg-white text-black'>Mannual</button>
            <div className='text-white p-3 m-4 rounded-lg w-3/12 mt-6 bg-white bg-opacity-20 shadow-lg'>
                        <span className='block'>Average win/loss trade</span>
                        <span className='block'>2.4</span>
                    </div>
                   
                </div>
                <div className=' flex h-100 '>
                        <div className='w-2/4 pl-4 pr-4'>
                            <img className='w-full h-3/4' src={stat1} alt="" />
                        </div>
                        <div className='w-2/4  pl-4 pr-4'>
                            <img className='w-full h-3/4' src={stat2} alt="" />
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Stats