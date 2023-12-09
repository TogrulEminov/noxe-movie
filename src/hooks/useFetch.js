import { useEffect, useState } from 'react';
import { fetchDataFromApi } from '../Api/api';
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);
    fetchDataFromApi(url)
      .then((data) => {
        setLoading(false);
        setData(data.results);
      })
      .catch(() => {
        setLoading(false);
        setError('Something went wrong!');
      });
  }, [url]);
  return { data, loading, error };
};

export default useFetch;




