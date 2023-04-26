import React from 'react';
import { useState, useEffect } from "react";
import './Read.css';
import axios from "axios";



const Read = () => {

  const [firebaseUserId, setUser] = useState({});
  const [firebaseKeyId, setKey] = useState({});

  axios.get('http://localhost:5000/firebaseUser').then(resp => {

  setUser(resp.data);
});

axios.get('http://localhost:5000/firebaseKey').then(resp => {

setKey(resp.data);
});

const [mostRecent, setMostRecent] = useState(null);

useEffect(() => {

  const fetchMostRecent = async () => {
    const response = await axios.get('http://localhost:5000/combineddatas');
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
    <div>
      <div className="Heading">
        <h3>Scanned Right Now</h3>
      </div>
      <div>
        <div className="background">
          <div className='Content'>
            <div>User Name       :{ firebaseUserId.fname }</div>
            <div>Key Place       :{"       " + firebaseKeyId.place}</div>
            <div>User Tel.Number :{firebaseUserId.phn}</div>
            <div>occupancy       :{firebaseUserId.designation}</div>
            <div>User Id         :{firebaseUserId.user_id}</div>
            <div>Key Id          :{firebaseKeyId.key_id}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Read;
