import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const fetchTasks = async (searchTerm = '', selectedCategory = '') => {
    try {
        const params = {};
        if (searchTerm) params.search = searchTerm;
        if (selectedCategory) params.category = selectedCategory;

        const response = await axios.get(BASE_URL, { params });
        return response.data;
    } catch (error) {
        console.log('Error fetching tasks:', error);
        throw error;
    }
};

export const createTask = async (task) => {
    try {
        const response = await axios.post(`${BASE_URL}/create`, task, {
            headers: { 'Content-Type': 'application/json' },
        });
        return response.data;
    } catch (error) {
        console.log('Error adding task:', error);
        throw error;
    }
};

export const updateTask = async (id, task) => {
    try {
        const response = await axios.patch(`${BASE_URL}/update/${id}`, task, {
            headers: { 'Content-Type': 'application/json' },
        });
        return response.data;
    } catch (error) {
        console.error('Error updating task:', error);
        throw error;
    }
};

export const deleteTask = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/delete/${id}`);
    } catch (error) {
        console.error('Error deleting task:', error);
        throw error;
    }
};
