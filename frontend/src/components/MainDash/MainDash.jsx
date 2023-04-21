import React from 'react';
import Cards from './Cards/Cards';
import Read from './Read/Read';
import Realtime from '../../firebaseconnection/realtime';

const MainDash = () => {
  return (
    <div className="MainDash">
      <h1 className="title">Dashboard</h1>
      <Cards />
      <Read />
      {/* <Realtime /> */}
    </div>
  );
};

export default MainDash;
