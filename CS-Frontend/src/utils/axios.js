import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:4000',
    // baseURL: 'https://connectshiksha-backend.onrender.com',
    // baseURL: 'https://connectshiksha-backend-4hbw.vercel.app',
    timeout: 9000,
    headers: {
        'Content-Type': 'application/json',
    }
});

export default axiosInstance
