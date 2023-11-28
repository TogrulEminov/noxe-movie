import axios from "axios";
// den sonra params ,? sonra queryparams
const BASE_URL = " http://www.omdbapi.com/";

export const fetchDataFromApi = (queryparams) => {
  return axios.get(BASE_URL, {
    params: queryparams,
  });
};
//http://www.omdbapi.com/?i=tt3896198&apikey=84677991&s=Red&type=movie

// export const getUsersComments = () => {
//   return axios.get("https://jsonplaceholder.typicode.com/comments");
// };