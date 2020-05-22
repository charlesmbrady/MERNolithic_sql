import './style.css';
import React from 'react';
import Hero from '../../GenericComponents/Hero';

export default function Home() {
  const mainItemTwo = (
    <h3 className='mernolithic-info'>
      This project was made with the{' '}
      <a
        href='https://github.com/charlesmbrady/MERNolithic_sql'
        target='_blank'
      >
        MERNolithic
      </a>{' '}
      starter project <br></br> developed by Charles Brady.
    </h3>
  );
  const subItemTwo = <p></p>;
  const mainItem = (
    <h2 className='head'>
      <a href='https://github.com/charlesmbrady/MERNolithic_sql'>Get Started</a>{' '}
      with MERNolithic!
    </h2>
  );
  const subItem = <div></div>;

  return (
    <div className='homeContainer'>
      <Hero mainItem={mainItemTwo} subItem={subItemTwo} />

      <Hero mainItem={mainItem} subItem={subItem} />
    </div>
  );
}
