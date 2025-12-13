import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com', // replace with your API
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: request interceptor for token
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Optional: response interceptor
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      console.log('Unauthorized');
      // e.g., redirect to login
    }
    return Promise.reject(error);
  }
);

export default api;
