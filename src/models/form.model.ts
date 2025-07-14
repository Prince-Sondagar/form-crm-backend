import mongoose from 'mongoose';

const FieldSchema = new mongoose.Schema({
  id: { type: String, required: true },
  type: { type: String, required: true },
  label: { type: String, required: true },
  required: { type: Boolean, default: false },
}, { _id: false });

const FormSchema = new mongoose.Schema({
  formId: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  fields: { type: [FieldSchema], default: [] }
}, { timestamps: true });

export default mongoose.model('Form', FormSchema);
