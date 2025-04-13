import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            default: '',
        },
        dueDate: {
            type: Date,
            default: null,
        },
        category: {
            type: String,
            default: 'General',
        },
        completed: {
            type: Boolean,
            default: false,
        }
    },
    {
        timestamps:true
    }
);
export const Task = mongoose.model('Task', TaskSchema);