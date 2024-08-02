// backend/routes.js
import express from 'express';
import { handleAnalyze, handleSubmit } from './controller.js';
import multer from 'multer';


const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/analyze', upload.single('file'), handleAnalyze);
router.post('/submit', handleSubmit);

export default router;
