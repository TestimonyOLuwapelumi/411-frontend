// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://whatisthe411-backend.onrender.com/api/personalities?populate=*', // Update with your Strapi API URL
});

export default api;
