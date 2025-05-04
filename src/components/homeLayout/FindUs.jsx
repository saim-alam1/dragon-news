import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
  return (
    <div>
      <h2 className='font-bold mb-5'>Find Us On</h2>
      <div>
        <div className="join join-vertical w-full">
          <button className="btn bg-base-100 justify-start join-item">
            <FaFacebook className='text-blue-500' size={20}></FaFacebook> Facebook</button>
          <button className="btn bg-base-100 justify-start join-item">
            <FaTwitter className='text-blue-500' size={20}></FaTwitter> Twitter</button>
          <button className="btn bg-base-100 justify-start join-item">
            <FaInstagram className='text-pink-500' size={20}></FaInstagram> Instagram</button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;