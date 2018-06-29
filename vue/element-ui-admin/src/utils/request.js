import axios from 'axios'
const request = axios.create({
    baseURL: 'http://api-dev',
    timeout: 5000
});

export default request