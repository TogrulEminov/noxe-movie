import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../Api/api";
// &s=Red&type=movie'
const useFetch = (queryparams) => {
  //loading data gelmedikde gozleme
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);
    fetchDataFromApi(queryparams)
      .then((res) => {
        setData(res.data);
      })
      .catch(() => {
        setError("Something went wrong!");
      })
      .finally(() => setLoading(false));
  }, [queryparams]);

  return { data, loading, error };
};

export default useFetch;
