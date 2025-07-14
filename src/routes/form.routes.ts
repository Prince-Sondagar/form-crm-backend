import express from 'express';
import { createForm, getForm } from '../controllers/form.controller';


const router = express.Router();

router.post('/', createForm);
router.get('/:formId', getForm);

export default router;
