import express from 'express';
import { createLead, getAllLeads } from '../controllers/lead.controller';


const router = express.Router();

router.post('/:formId/create', createLead);
router.get('/:formId', getAllLeads);

export default router;
