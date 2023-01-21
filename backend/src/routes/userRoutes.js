import { Router } from 'express';
import { createBlog, fetchSingle, findAllBlogs } from '../controllers/userController.js';
const router = Router();

router.post('/create', createBlog);
router.get('/', findAllBlogs);
router.get('/:id',fetchSingle)

export default router;
