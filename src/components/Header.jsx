import React from 'react';
import logo from '../assets/logo.png';
import { format } from 'date-fns';

const Header = () => {
  return (
    <div className='flex justify-center flex-col items-center mt-12'>
      <img src={logo} alt="" />
      <p className='mt-5 mb-2.5 text-[18px] text-accent'>Journalism Without Fear or Favour</p>
      <p className='text-xl font-semibold text-accent'>{format(new Date(), "EEEE, LLLL d, yyyy")}</p>
    </div>
  );
};

export default Header;