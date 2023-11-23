import axios from 'axios';

const BASE_URL = ' http://www.omdbapi.com/?i=tt3896198&apikey=84677991';

export const fetchDataFromApi = async (url,params) => {
  try {
    const { data } = await axios.get(BASE_URL + url,{
      params
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
