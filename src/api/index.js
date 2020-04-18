import Axios from 'axios';
const url = "https://corona.lmao.ninja/v2";

export const fetchData = async (country) => {
  if (country === 'world')
    return await Axios.get(`${url}/all`)
  return await Axios.get(`${url}/countries/${country}`);
};

export const fetchCountries = async () => {
  const covid = await Axios.get(`${url}/countries/`);
  return covid.data.map(entry => entry.country);
};