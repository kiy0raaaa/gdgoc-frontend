import axios from 'axios';

const API_URL = 'https://gdgoc-ugm-api.vercel.app/api/navigation';

export const getGDGoCData = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};