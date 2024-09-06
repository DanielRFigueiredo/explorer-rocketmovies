import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-filmes-explorer.onrender.com',
})


export { api }