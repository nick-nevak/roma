import axios from 'axios';

const serverUrl = 'https://...';
const baseAxios = axios.create({
  baseURL: serverUrl,
});

export default baseAxios;
