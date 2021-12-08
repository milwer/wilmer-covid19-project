import { useEffect, useState } from "react";
import axios from "axios";

const useGetCountries = (apiUrl) => {
  const [countries, setCountries] = useState([]);

  useEffect(async () => {
    const response = await axios(apiUrl);
    setCountries(response.data);
  }, []);

  return countries;
};

export default useGetCountries;
