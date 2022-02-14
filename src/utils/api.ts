import axios from 'axios';

const BASE_URL = process.env.REACT_APP__URL;
console.log(BASE_URL);
const API = axios.create({
    baseURL: BASE_URL
})


export { API }




