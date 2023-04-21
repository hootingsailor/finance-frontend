import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
        <div className='items-center'>
            <h1 className='text-3xl font-bold font-mono'>yourFinance</h1>
        </div>
        <div className='list-none flex justify-around w-3/5 h-20 items-center'>
			<Link to="/"><li className='hover:cursor-pointer'>Home</li></Link>
			<Link to="/investments"><li className='hover:cursor-pointer'>Investments</li></Link>
			<Link to="/bills"><li className='hover:cursor-pointer'>Bills</li></Link>
			<Link to="/about"><li className='hover:cursor-pointer'>About Us</li></Link>
        </div>
    </div>
  )
}

export default Navbar;