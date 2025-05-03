import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatesNews from '../components/LatesNews';

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className='w-11/12 mx-auto my-3'>
          <LatesNews></LatesNews>
        </section>
      </header>
      <main>
        <section className='left_nav'></section>
        <section className='main'>
          <Outlet></Outlet>
        </section>
      </main>
    </div>
  );
};

export default HomeLayout;