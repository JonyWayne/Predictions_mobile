/* eslint-disable */
import axios from 'axios';

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export const apiService = axios.create({
  baseURL: apiUrl,
});

apiService.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

apiService.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export const getData = async (endpoint: string, params?: any): Promise<any> => {
  try {
    const response = await apiService.get(endpoint, { params });
    console.log(endpoint, 'endpoint');

    return response.data;
  } catch (error) {
    console.log(endpoint, 'endpoint');
    throw error;
  }
};
