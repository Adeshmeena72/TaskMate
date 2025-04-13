import { useContext } from 'react';
import TaskItem from './TaskItem';
import TaskContext from '../contexts/TaskContext';

const TaskList = () => {
    const { tasks, loading } = useContext(TaskContext);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (tasks.length === 0) {
        return (
            <div className="text-center py-8">
                <p className="text-gray-500">No tasks found. Add a new task to get started!</p>
            </div>
        );
    }

    return (
        <div>
            {tasks.map((task) => (
                <TaskItem key={task._id} task={task} />
            ))}
        </div>
    );
};

export default TaskList;