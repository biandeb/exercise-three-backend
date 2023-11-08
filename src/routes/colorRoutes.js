import express from 'express';

import { getColors, postColor } from '../controllers/colorController.js';

const router = express.Router();

router.get('/', getColors);

router.post('/', postColor);

export default router;
