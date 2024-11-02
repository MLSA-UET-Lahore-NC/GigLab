import React, { useState } from 'react';
import logo from '../assets/logo.jpg';
import { IoMenu } from 'react-icons/io5';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className='flex items-center justify-between ml-[100px] md:ml-[100px] bg-white m-12 h-14 rounded-full'>
        <img src={logo} alt="gigLab" className='h-10 rounded-full w-24 ml-10' />
        <div className="hidden md:flex">
          <ul className='flex gap-6 text-gray-500'>
            <li className='cursor-pointer hover:text-gray-800 transition duration-300 ease-in-out hover:translate-y-0.5'> Home</li>
            <li className='cursor-pointer hover:text-gray-800 transition duration-300 ease-in-out hover:translate-y-0.5'>Find work</li>
            <li className='cursor-pointer hover:text-gray-800 transition duration-300 ease-in-out hover:translate-y-0.5'>Find Freelancers</li>
            <li className='cursor-pointer hover:text-gray-800 transition duration-300 ease-in-out hover:translate-y-0.5'>Log in</li>
            <li className='cursor-pointer hover:text-gray-800 transition duration-300 ease-in-out hover:translate-y-0.5'>Sign up</li>
          </ul>
        </div>
        <button className='md:bg-blue-500 md:mr-[50px] md:text-white md:rounded-full md:h-8 md:w-36 md:ml-6 md:shadow-md '>
            Post A Project
          </button>
        <div className="md:hidden flex items-center ">
          <IoMenu className='text-gray-500 cursor-pointer h-8 w-8 ml-10' onClick={toggleMenu} />
        </div>
      </div>
      
      <div className={`flex flex-col items-center bg-white w-[497px] rounded-lg shadow-md p-4 md:hidden transition-all duration-300 ${isOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <ul className='flex flex-col gap-4 text-gray-500'>
          <li className='cursor-pointer hover:text-gray-800 transition duration-300 ease-in-out'>Home</li>
          <li className='cursor-pointer hover:text-gray-800 transition duration-300 ease-in-out'>Find work</li>
          <li className='cursor-pointer hover:text-gray-800 transition duration-300 ease-in-out'>Find Freelancers</li>
          <li className='cursor-pointer hover:text-gray-800 transition duration-300 ease-in-out'>Log in</li>
          <li className='cursor-pointer hover:text-gray-800 transition duration-300 ease-in-out'>Sign up</li>
        </ul>
        <button className='bg-blue-500 text-white rounded-full h-8 w-36 mt-4 shadow-md'>
          Post A Project
        </button>
      </div>
    </div>
  );
};

export default Navbar;
