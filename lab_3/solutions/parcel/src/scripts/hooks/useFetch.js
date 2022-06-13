import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error(
            "Could not get the data from the database\nwith the url: '" +
              url +
              "'!"
          );
        }

        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
        setError(undefined);
      })
      .catch((e) => {
        setLoading(false);
        setError(e.message);
        console.log(e.message);
      });
  }, [url]);

  return [data, loading, error];
};

export default useFetch;
