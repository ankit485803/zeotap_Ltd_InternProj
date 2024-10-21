


const axios = require('axios');

const API_KEY = 'your_api_key'; // Replace with your actual API key
const URL = 'http://api.openweathermap.org/data/2.5/weather';



const fetchWeather = async (city) => {
    const response = await axios.get(URL, {
        params: { q: city, appid: API_KEY }
    });
    return response.data;
};



// exporting
module.exports = { fetchWeather };
