import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YzBmMTk4MDJkOTI4Y2FhNDk1MmFhNGFmNDU5YzJiYyIsInN1YiI6IjY1NWI0ZjBlN2YwNTQwMThkNDIwZWI2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VCBNQylOrqRHikR8qYwjsGlxeYG8PleBKzMZHK6Tdoc';

const headers = {
  Authorization: 'Bearer ' + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
   return data
  } catch (err) {
    console.log(err);
    return err;
  }
};