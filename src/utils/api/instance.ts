import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://shift-backend.onrender.com/',
  withCredentials: true
});
