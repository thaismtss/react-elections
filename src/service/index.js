import axios from 'axios';

const BASE_URL =
  import.meta.env.VITE_BASE_URL_BACKEND || 'http://localhost:3001/';

console.log(import.meta.env.VITE_BASE_URL_BACKEND);

export const axiosInstance = axios.create({ baseURL: BASE_URL });
