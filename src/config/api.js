import axios from 'axios';

export const API_URL = "http://localhost:5454";

// export const API_URL = "http://54.197.189.182:5454";


export const api = axios.create({
  baseURL: API_URL, 
  headers: {
    'Content-Type': 'application/json',
  },
});


