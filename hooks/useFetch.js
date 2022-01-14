import { useState, useEffect, useRef } from "react";

export const useFetch = (url) => {
  const cache = useRef({});
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      setStatus("fetching");
      if (cache.current[url]) {
        const data = cache.current[url];
        setData(data);
        setStatus("fetched");
      } else {
        const response = await fetch(`${url}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "da95846f-b6ff-4614-bdfa-2567ee0214d1",
          },
        });
        const data = await response.json();
        cache.current[url] = data; // set response in cache;
        setData(data);
        setStatus("fetched");
      }
    };

    fetchData();
  }, [url]);

  return [data, status];
};
