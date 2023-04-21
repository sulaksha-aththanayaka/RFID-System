// For all users card
import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get('/api/cards'); // Replace this with your API endpoint
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

const cardsData = fetchData();
console.log(cardsData);