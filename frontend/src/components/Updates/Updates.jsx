import React from 'react';
import './Updates.css';
import { UpdatesData } from '../../Data/Data';

const Updates = () => {
  return (
    <div className="Updates">
      <h2 className="Heading">Last Read</h2>

      {/* {UpdatesData.map((update) => (
        <div className="update">
          <img src={update.img} alt="profile" />
          <div className="noti">
            <div style={{ marginBottom: '0.5rem' }}>
              <span>{update.name}</span>
              <span> {update.noti}</span>
            </div>
            <span>{update.time}</span>
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default Updates;
