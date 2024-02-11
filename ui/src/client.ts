import axios from "axios";

const SERVER: string = "http://localhost:4000/";

const api = axios.create({
    baseURL: SERVER,
    headers: {
        'Content-Type': 'application/json',
    }
});

export const serverTry = async () => {
    try {
        const response = await api.get('/data');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
