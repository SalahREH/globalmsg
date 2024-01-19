import axios from 'axios';

const API_BASE_URL = 'https://localhost:7211/api/Message'; // Cambia esto con tu URL de API

const api = {
    get: async () => {
        try {
            const response = await axios.get(API_BASE_URL);
            return response.data;
        } catch (error) {
            console.error('Error in GET request:', error);
            throw error;
        }
    },

    post: async (data) => {
        try {
            const response = await axios.post(API_BASE_URL, data);
            return response.data;
        } catch (error) {
            console.error('Error in POST request:', error);
            throw error;
        }
    },

    put: async (id, data) => {
        try {
            const response = await axios.put(`${API_BASE_URL}/${id}`, data);
            return response.data;
        } catch (error) {
            console.error('Error in PUT request:', error);
            throw error;
        }
    },

    delete: async (id) => {
        try {
            const response = await axios.delete(`${API_BASE_URL}/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error in DELETE request:', error);
            throw error;
        }
    },
};

export default api;