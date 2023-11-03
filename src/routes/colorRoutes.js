import express from 'express';

import { getColors } from '../controllers/colorController.js';

const router = express.Router();

router.get('/', getColors);

export default router;
