import axios from 'axios';

// Membaca URL API dari file .env
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://gdgoc-ugm-api.vercel.app/api';

export const getNavigationData = async () => {
    const response = await axios.get(`${API_BASE_URL}/navigation`);
    return response.data;
};

export const getGDGoCData = getNavigationData;