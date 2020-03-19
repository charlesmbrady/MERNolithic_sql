import './style.css';
import React from 'react';

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
      <div>Put Content Here</div>
      <div>Put Content Here</div>
    </div>
  );
}
