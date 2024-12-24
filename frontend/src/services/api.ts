import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getSoilTypes = () => api.get('/soil-types/');
export const getCropTypes = () => api.get('/crop-types/');
export const getRecommendations = (data: any) => api.post('/recommendations/', data);
export const getYieldData = (data: any) => api.post('/yield-data/', data); 