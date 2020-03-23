import './style.css';
import React from 'react';
import API from '../../Utilities/API';

export default function Home() {
  const healthcheck = () => {
    API.healthcheck(res => {
      if (res) {
        console.log('app is healthy');
      }
    });
  };

  return (
    <div>
      <h1>Healthcheck</h1>
      <button onClick={() => healthcheck()}>ping</button>
    </div>
  );
}
