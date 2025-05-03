import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className='flex justify-center flex-col items-center mt-12'>
      <img src={logo} alt="" />
      <p className='mt-5 mb-2.5 text-[18px]'>Journalism Without Fear or Favour</p>
      <p className='text-xl'>Sunday, November 27, 2025</p>
    </div>
  );
};

export default Header;