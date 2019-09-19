import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID deefdf01510843b34d3446ea627bbae2d58f7e68d8c66d8500e40b47e71db93c'
    }
});