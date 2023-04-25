import React, { useState, useEffect } from 'react';
import './Updates.css';
import axios from 'axios';

const Updates = () => {
  const [mostRecent, setMostRecent] = useState(null);

  useEffect(() => {

    const fetchMostRecent = async () => {
      const response = await axios.get('http://localhost:5000/combineddatas?_sort=date&_order=desc&_limit=1');
      const mostRecentData = response.data[response.data.length - 1];
      setMostRecent(mostRecentData);
    };
    

    fetchMostRecent();
  }, []);

  axios.get('/api/firebaseUserId')
  .then(response => {
    const firebaseUserId = response.data.myVariable;
    console.log(firebaseUserId); 
  })
  .catch(error => {
    console.error(error);
  });


  return (
    <div className="Updates">
      <h2 className="Heading">Last Read</h2>
      {mostRecent && (
        <div className="update">
          {/* <img src={mostRecent.user_image} alt="profile" /> */}
          <div className="noti">
            <div style={{ marginBottom: '0.5rem' }}>
              <span>{mostRecent.fname}</span>
              <span> got the key of </span>
              <span>{mostRecent.place}</span>
            </div>
            <span>{new Date(mostRecent.date).toLocaleString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Updates;
