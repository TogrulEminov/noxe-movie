import { useEffect, useState } from 'react';
import { fetchDataFromApi } from '../Api/api';
const useFetch = (queryparams) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);

    fetchDataFromApi(queryparams)
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch(() => {
        setLoading(false);
        setError('Something went wrong!');
      });
  }, []);

  return { data, loading, error };
};

export default useFetch;