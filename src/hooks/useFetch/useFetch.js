import {useState, useEffect} from 'react';
import axios from 'axios';

const useFetch = url => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    try {
      const {data: responseData} = await axios.get(url);
      setData(responseData);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  return {data, loading, error};
};

export default useFetch;
