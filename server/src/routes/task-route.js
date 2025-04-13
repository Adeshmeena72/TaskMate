import { Router } from 'express';
import { getAllTasks, createTask, updateTask, deleteTask } from '../controllers/task-controller.js';


const router = Router();

router.route('/').get(getAllTasks)
router.route('/create').post(createTask)
router.route('/update/:id').patch(updateTask)
router.route('/delete/:id').delete(deleteTask)

export default router;