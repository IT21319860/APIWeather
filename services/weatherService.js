// services/weatherService.js
const axios = require('axios');

exports.getWeatherData = async (location) => {
  const apiKey = process.env.OPENWEATHERMAP_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
  const response = await axios.get(url);
  return response.data;
};
