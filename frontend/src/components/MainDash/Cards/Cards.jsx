import React, {useState} from 'react';
import './Cards.css';
import { cardsData } from '../../../Data/Data';
import Card from '../Card/Card';
import CardUser from "../Card/CardUser";
import axios from 'axios';


const Cards = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [allKeys, setAllKeys] = useState([]);

  axios.get('http://localhost:5000/cards').then(resp => {

  setAllUsers(resp.data);
});

  axios.get('http://localhost:5000/keys').then(resp => {

  setAllKeys(resp.data);
});

  return (
    <div className="Cards">
      {cardsData.map((card, id) => {

        return (
          <div className="parentContainer" key={id}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
              users ={allUsers}
              keys={allKeys}
              id = {id}
            />
            {/* <Cards
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
              keys={allKeys}
              id = {id}
            /> */}
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
