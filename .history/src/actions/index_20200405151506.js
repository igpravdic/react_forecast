import axios from 'axios';

const API_KEY = '5498dca736c4c4ac63dee42a27b44ee8';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// ACTION CREATOR
export function fetchWeather(city) {

  // Change `AU` to another ISO 3166 country code to search another country (e.g. US)
  const url = `${ROOT_URL}&q=${city},HR`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
