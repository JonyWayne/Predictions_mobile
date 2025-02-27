import axios from 'axios';

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export const apiService = axios.create({
  baseURL: apiUrl,
});

apiService.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

apiService.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export const getData = async <T>(endpoint: string, params?: T): Promise<T> => {
  try {
    const response = await apiService.get<T>(endpoint, { params });
    console.error(endpoint, 'endpoint');

    return response.data;
  } catch (error) {
    console.error(endpoint, 'endpoint');
    throw error;
  }
};
