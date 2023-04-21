import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
        <div className='items-center'>
            <h1 className='text-3xl font-bold font-mono'>yourFinance</h1>
        </div>
        <div className='list-none flex justify-around w-3/5 h-20 items-center'>
			<li className='hover:cursor-pointer'>Home</li>
			<li className='hover:cursor-pointer'>Investments</li>
			<li className='hover:cursor-pointer'>Bills</li>
			<li className='hover:cursor-pointer'>About Us</li>
        </div>
    </div>
  )
}

export default Navbar