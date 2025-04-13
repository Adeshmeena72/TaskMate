import { useState, useContext } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TaskContext from '../contexts/TaskContext';

const TaskForm = () => {
    const { addTask } = useContext(TaskContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState(null);
    const [category, setCategory] = useState('General');
    const [categories] = useState(['General', 'Work', 'Personal', 'Shopping', 'Other']);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        addTask({
            title,
            description,
            dueDate,
            category,
        });

        setTitle('');
        setDescription('');
        setDueDate(null);
        setCategory('General');
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6 bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Add New Task</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Title*</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Task title"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                        {categories.map((cat) => (
                            <option key={cat} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Task description"
                    rows="3"
                />
            </div>
            <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
                <DatePicker
                    selected={dueDate}
                    onChange={(date) => setDueDate(date)}
                    minDate={new Date()}
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholderText="Select a date (optional)"
                    isClearable
                />
            </div>
            <button
                type="submit"
                className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
                Add Task
            </button>
        </form>
    );
};

export default TaskForm;