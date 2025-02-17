import { getData } from '@/shared/api';
import { useState } from 'react';

export const useFetchFunc = <T>() => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = async (endpoint: string) => {
    try {
      setIsLoading(true);
      const result = await getData(endpoint);
      setData(result);
    } catch (e) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return { data, isLoading, isError, fetchData };
};
