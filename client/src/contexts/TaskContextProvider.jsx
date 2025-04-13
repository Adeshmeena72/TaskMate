import React from "react";
import TaskContext from "./TaskContext";
import { useState, useEffect } from 'react';
import { fetchTasks, createTask, updateTask, deleteTask } from '../api/taskapi';


const TaskContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const loadTasks = async () => {
        try {
            setLoading(true);
            const tasks = await fetchTasks(searchTerm, selectedCategory);
            setTasks(tasks);
        } catch (err) {
            console.error('Error fetching tasks:', err);
        } finally {
            setLoading(false);
        }
    };


    const addTask = async (task) => {
        try {
            const newTask = await createTask(task);
            setTasks([newTask, ...tasks]);
        } catch (err) {
            console.error('Error adding task:', err);
        }
    };

    const updateExistingTask = async (id, updatedTask) => {
        try {
            const task = await updateTask(id, updatedTask);
            setTasks(tasks.map(t => t._id === id ? task : t));
        } catch (err) {
            console.error('Error updating task:', err);
        }
    };

    const deleteExistingTask = async (id) => {
        try {
            await deleteTask(id);
            setTasks(tasks.filter(task => task._id !== id));
        } catch (err) {
            console.error('Error deleting task:', err);
        }
    };

    useEffect(() => {
        loadTasks();
    }, [searchTerm, selectedCategory]);


    return (
        <TaskContext.Provider
            value={{
                tasks,
                loading,
                addTask,
                updateTask: updateExistingTask,
                deleteTask: deleteExistingTask,
                searchTerm,
                setSearchTerm,
                selectedCategory,
                setSelectedCategory,
                loadTasks,
            }}
        >
            {children}
        </TaskContext.Provider>
    );
}
export default TaskContextProvider;
