import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
  console.log(news);
  return (
    <div className='space-y-5'>
      <img className='rounded-[5px] w-full h-[400px] object-cover' src={news.thumbnail_url} alt="" />
      <h2 className='font-bold text-2xl'>{news.title}</h2>
      <p>{news.details}</p>

      <Link className='btn bg-secondary text-white cursor-pointer' to={`/category/${news.category_id}`}>All news in this category</Link>
    </div>
  );
};

export default NewsDetailsCard;