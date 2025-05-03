import React from 'react';
import Marquee from 'react-fast-marquee';

const LatesNews = () => {
  return (
    <div className='flex items-center gap-5 bg-base-200 p-4 mt-7'>
      <p className='text-xl text-base-100 font-medium bg-secondary px-4 py-2'>Latest</p>

      <Marquee className='flex gap-5' pauseOnHover={true} speed={80}>
        <p className='font-semibold text-[18px] mr-10'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as 3-3.
        </p>
        <p className='font-semibold text-[18px] mr-10'>Match Highlights: Barcelona vs Madrid — as it happened   !   Match Highlights: Barcelona vs Madrid as 3-2.
        </p>
        <p className='font-semibold text-[18px] mr-10'>Match Highlights: PSG vs Man City — as it happened   !   Match Highlights: Germany vs Spain as 3-4.
        </p>
      </Marquee>
    </div>
  );
};

export default LatesNews;