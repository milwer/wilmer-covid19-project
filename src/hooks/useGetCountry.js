import { useEffect, useRef, useReducer } from "react";

export const useGetCountry = (url) => {
  const cache = useRef({});
  const cacheTime = 7200000;
  let cacheTimer = 0;

  const initialState = {
    status: "idle",
    error: null,
    data: [],
  };

  const getCacheTimer = (time) => {
    const now = new Date().getTime();
    if (cacheTimer < now + time) {
      cacheTimer = now + time;
    }
    return cacheTimer;
  };

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "FETCHING":
        return {...initialState, status: "fetching"};
      case "FETCHED":
        return { ...initialState, status: "fetched", data: action.payload };
      case "FETCH_ERROR":
        return { ...initialState, status: "error", error: action.payload };
      default:
        return state;
    }
  }, initialState);

  useEffect(() => {
    let cancelRequest = false;
    if (!url) return;

    const fetchData = async (time) => {
      dispatch({ type: "FETCHING" });
	  let cacheRoute = true;

	  if (cache.current[url]) {
		  const now = new Date().getTime();
		  if (cache.current[url]["cacheTimer"] < now) {
			cacheRoute = false;
			cache.current[url] = {};		  
		  }
	  }

      if (cache.current[url] && cacheRoute == true) {
        const data = cache.current[url];
        dispatch({ type: "FETCHED", payload: data });
      } else {
        try {
          const response = await fetch(url);
          const data = await response.json();
          cache.current[url] = data;
          cache.current[url]["cacheTimer"] = getCacheTimer(time);
          if (cancelRequest) return;
          dispatch({ type: "FETCHED", payload: data });
        } catch (error) {
          if (cancelRequest) return;
          dispatch({ type: "FETCH_ERROR", payload: error.message });
        }
      }
    };

    fetchData(cacheTime);

    return function cleanup() {
      cancelRequest = true;
    };
  }, [url]);

  return state;
};
