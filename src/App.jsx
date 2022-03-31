import React from 'react';
import { Nav } from './components/Nav/Nav';
import { General } from './components/General/General';
import './App.scss';

export const App = () => {

  return (
    <>
      <section className='navbar'>
        <Nav />
      </section>
      <section className='general'>
        <General />
      </section>
    </>
  );
}


