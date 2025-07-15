import mongoose from "mongoose";

const LeadsSchema = new mongoose.Schema({
  formId: { type: String, required: true },
  data: { type: mongoose.Schema.Types.Mixed }, 
}, { timestamps: true });

export default mongoose.model("Leads", LeadsSchema);