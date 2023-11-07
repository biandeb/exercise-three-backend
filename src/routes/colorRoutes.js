import express from 'express';

import { getColors, postColor } from '../controllers/colorController.js';
import { getUsers, postUser } from '../controllers/userController.js';

const router = express.Router();

router.get('/', getColors);
router.get('/', getUsers);

router.post('/', postColor);
router.post('/', postUser);

export default router;
