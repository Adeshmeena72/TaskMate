import { useState, useContext } from 'react';
import { FaEdit, FaTrash, FaCheck, FaTimes } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TaskContext from '../contexts/TaskContext';

const TaskItem = ({ task }) => {
    const { updateTask, deleteTask } = useContext(TaskContext);
    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState({ ...task });

    const handleEdit = () => {
        setIsEditing(true);
        setEditedTask({ ...task });
    };

    const handleSave = () => {
        updateTask(task._id, editedTask);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    const handleToggleComplete = () => {
        updateTask(task._id, { completed: !task.completed });
    };

    const formatDate = (date) => {
        if (!date) return 'No due date';
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    };

    return (
        <div className={`p-4 mb-4 rounded-lg shadow ${task.completed ? 'bg-gray-100' : 'bg-white'}`}>
            {isEditing ? (
                <div className="space-y-3">
                    <input
                        type="text"
                        value={editedTask.title}
                        onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    <textarea
                        value={editedTask.description}
                        onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded"
                        rows="2"
                    />
                    <div className="grid grid-cols-2 gap-4">
                        <select
                            value={editedTask.category}
                            onChange={(e) => setEditedTask({ ...editedTask, category: e.target.value })}
                            className="p-2 border border-gray-300 rounded"
                        >
                            <option value="General">General</option>
                            <option value="Work">Work</option>
                            <option value="Personal">Personal</option>
                            <option value="Shopping">Shopping</option>
                            <option value="Other">Other</option>
                        </select>
                        <DatePicker
                            selected={editedTask.dueDate ? new Date(editedTask.dueDate) : null}
                            onChange={(date) => setEditedTask({ ...editedTask, dueDate: date })}
                            minDate={new Date()}
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholderText="Select due date"
                            isClearable
                        />
                    </div>
                    <div className="flex justify-end space-x-2">
                        <button
                            onClick={handleCancel}
                            className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSave}
                            className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                            Save
                        </button>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="flex justify-between items-start">
                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={handleToggleComplete}
                                className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                            <h3 className={`text-lg font-medium ${task.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                                {task.title}
                            </h3>
                        </div>
                        <div className="flex space-x-2">
                            <button
                                onClick={handleEdit}
                                className="text-blue-600 hover:text-blue-800"
                                aria-label="Edit task"
                            >
                                <FaEdit />
                            </button>
                            <button
                                onClick={() => deleteTask(task._id)}
                                className="text-red-600 hover:text-red-800"
                                aria-label="Delete task"
                            >
                                <FaTrash />
                            </button>
                        </div>
                    </div>
                    {task.description && (
                        <p className={`mt-2 text-gray-600 ${task.completed ? 'line-through' : ''}`}>
                            {task.description}
                        </p>
                    )}
                    <div className="mt-3 flex flex-wrap items-center justify-between text-sm">
                        <span className={`px-2 py-1 rounded-full ${task.completed ? 'bg-gray-200 text-gray-700' : 'bg-blue-100 text-blue-800'}`}>
                            {task.category}
                        </span>
                        <span className={`${task.completed ? 'text-gray-500' : 'text-gray-700'}`}>
                            Due: {formatDate(task.dueDate)}
                        </span>
                        <span className={`text-xs ${task.completed ? 'text-green-600' : 'text-gray-500'}`}>
                            {task.completed ? 'Completed' : 'Pending'}
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TaskItem;