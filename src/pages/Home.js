import React from 'react'

const Home = () => {
  return (
    <div className=' items-center space-y-10'>
        <div className='flex flex-col items-center space-y-6'>
            <h1 className='text-7xl font-semibold'>Welcome to yourFinance</h1>
            <h3 className='text-3xl font-medium'>Your personal portfolio to manage all your Finances</h3>
        </div>
        <div className='grid grid-cols-3 gap-4 mx-10'>
            <div className='bg-blue-300 border border-gray-500 rounded-lg text-center hover:cursor-pointer hover:bg-blue-600 hover:text-white'>Savings</div>
            <div className='bg-blue-300 border border-gray-500 rounded-lg text-center hover:cursor-pointer hover:bg-blue-600 hover:text-white'>Investments</div>
            <div className='bg-blue-300 border border-gray-500 rounded-lg text-center hover:cursor-pointer hover:bg-blue-600 hover:text-white'>Bills</div>
        </div>
        
    </div>
  )
}

export default Home