import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import Form from '../models/form.model';

export const createForm = async (req: Request, res: Response) => {
  try {
    const { name, fields } = req.body;
    const formId = uuidv4();

    const form = await Form.create({ name, fields, formId });
    res.status(201).json({ success: true, formId, shareUrl: `/forms/${formId}` });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create form' });
  }
};

export const getForm = async (req: Request, res: Response) => {
  try {
    const { formId } = req.params;
    const form = await Form.findOne({ formId });

    if (!form) return res.status(404).json({ error: 'Form not found' });

    res.json(form);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching form' });
  }
};
