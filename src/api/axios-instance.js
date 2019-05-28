import axios from 'axios';

const { env } = process;

const instance = axios.create({
  baseURL: env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  }
});

export default instance;
