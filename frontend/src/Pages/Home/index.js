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
      Healthcheck asdf(see console).
      <button onClick={() => healthcheck()}>Get server response...</button>
    </div>
  );
}
