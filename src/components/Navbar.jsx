import React from 'react';
import { Link, NavLink } from 'react-router';
import user from '../assets/user.png';

const Navbar = () => {
  return (
    <div className='py-8 flex justify-between items-center'>
      <div className=''></div>
      <div className='nav flex gap-5 text-accent font-semibold'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/career'>Career</NavLink>
      </div>
      <div className='login-btn flex gap-3'>
        <img src={user} alt="" />
        <Link to='/auth/login' className='btn btn-primary px-10'>LogIn</Link>
      </div>
    </div>
  );
};

export default Navbar;