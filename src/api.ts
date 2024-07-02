import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; // Замените на ваш URL сервера

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api;