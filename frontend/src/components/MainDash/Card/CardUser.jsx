import React, { useState } from 'react';
import axios from "axios";
import { useEffect } from "react";
import './Card.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion, AnimateSharedLayout } from 'framer-motion';
import { UilTimes } from '@iconscout/react-unicons';
// import Chart from 'react-apexcharts';

//The Transistion is happend with this.
const CardUser = (props) => {
  const [expanded, setExpanded] = useState(false);

  const [allUsers, setAllUsers] = useState([]);
  const [allKeys, setAllKeys] = useState([]);

  axios.get('http://localhost:5000/cards').then(resp => {

  setAllUsers(resp.data);
});

//   axios.get('http://localhost:5000/keys').then(resp => {

//   setAllKeys(resp.data);
// });

  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        ((<CompactCard param={props} setExpanded={() => setExpanded(true)} />),
        (
          <CompactCardUsual
            param={props}
            setExpanded={() => setExpanded(true)}
          />
        ))
      )}
    </AnimateSharedLayout>
  );
};

// Compact Card for 'To be Handover'
function CompactCard({ param, setExpanded }) {
  const Png = param.png;
  return (
    <motion.div
      className="CompactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
      onClick={setExpanded}
    >
      <div className="radialBar">
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
      </div>
      <div className="detail">
        <Png />
        <span>${param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </motion.div>
  );
}

//Compact cars for other two
function CompactCardUsual({ param, setExpanded }) {
  return (
    <motion.div
      className="CompactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
      onClick={setExpanded}
    >
      <div className="radialBar">
        <span>{param.title}</span>
      </div>
    </motion.div>
  );
}



// Expanded Card
function ExpandedCard({ param, setExpanded }) {
  console.log(param.users);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("/cards/get")
      console.log("cards >>>", data);
    };
    fetchData();
  })

  // function SelectCard(){
  //   if(param.id == 0){
  //     param.users.map((data)=>{
  //       return (
  //         <div>
  //           <p>{data.name}</p>
  //         </div>
  //       )
  //     })
  // }else if(param.id == 1){
  //   param.keys.map((data)=>{
  //     return (
  //       <div>
  //         <p>{data.place}</p>
  //       </div>
  //     )
  //   })
  // }else{
  //   param.keys.map((data)=>{
  //     return (
  //       <div>
  //         <p>{data.place}</p>
  //       </div>
  //     )
  //   })
  // }
  // }

  // console.log(props);

  return (
    <motion.div
      className="ExpandedCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div style={{ alignSelf: 'flex-end', cursor: 'pointer', color: 'white' }}>
        <UilTimes onClick={setExpanded} />
      </div>
      <span>{param.title}</span>

      <div>{param.value}</div>
      <div className="chartContainer">
        <h1>ads</h1>
        <p>
          {param.users.map((data)=>{
        return (
          <div>
            <p>{data.name}</p>
          </div>
        )
      })}
          </p>
      </div>


    </motion.div>
  );
}

export default CardUser;
