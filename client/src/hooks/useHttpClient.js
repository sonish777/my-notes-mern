import { useState } from "react";
import axios from "axios";

const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const clearError = () => {
    setError(null);
  };

  const sendRequest = async (
    url,
    method = "GET",
    body = {},
    headers = {},
    resType = ""
  ) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await axios(url, {
        method,
        data: body,
        headers,
        responseType: resType,
      });
      if (response.data.status === "success") {
        setIsLoading(false);
        return response.data;
      }
      if (resType === "blob") {
        setIsLoading(false);
        return response;
      }
    } catch (error) {
      setIsLoading(false);
      resType === "blob"
        ? setError("Error while downloading. Please try again")
        : setError(error.response.data.error);
      throw error;
    }
  };

  return [isLoading, error, clearError, sendRequest];
};

export default useHttpClient;
