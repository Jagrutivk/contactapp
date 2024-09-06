import { useState, useEffect, useCallback } from "react";

const useApi = (url, method = "GET") => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to make the API request, wrapped in useCallback to avoid recreating the function on every render.
  const fetchData = useCallback(async () => {
    if (!url) {
      setError("No URL provided");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: ["POST", "PUT", "PATCH"].includes(method)
          ? JSON.stringify(data)
          : null,
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      setData(result);
      console.log("data in hook", data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  }, [url, method]);

  useEffect(() => {
    fetchData();
  }, [fetchData]); // Only run when the fetchData function changes (url, method, or options change)

  return { data, loading, error };
};

export default useApi;
