import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
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