// import { useState, useEffect } from "react";
// import axios from "axios";
// const Api = () => {
//   const API_URL = "https://api.themoviedb.org/3";
//   const [movies, setMovies] = useState([]);
//   const fetchData = async () => {
//     const {data} = await axios.get(`${API_URL}/discover/movie`, {
//       params: {
//         api_key: "5de87e1bc5e9a0ac27e1f4758765722a",
//       },
//     });
//     setMovies(data.results)
//   };
//   console.log(movies);
//   useEffect(()=>{
//     fetchData()
//   },[])
// };

// export default Api;

// export const fetchDataFromApi=()=>{
//   const API_URL = "https://api.themoviedb.org/3/discover/movie";
//   return axios.get(API_URL,{
//     params: {
//       api_key: "5de87e1bc5e9a0ac27e1f4758765722a",

//     }
//   })
// }

//

import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTc5Nzc4ZGZkMTY2Nzc1MzYxOTc1MzJjMTE2ZmM0OCIsInN1YiI6IjY0YzIzYzdiZWRlMWIwMDExZjdlMDliZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LJW5j94HzAc8x3EwjpmS07FAQd8st-OxB-Isxy6CIoc";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
