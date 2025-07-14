import mongoose from "mongoose";

const SubmissionSchema = new mongoose.Schema({
  formId: { type: String, required: true },
  data: { type: mongoose.Schema.Types.Mixed }, 
}, { timestamps: true });

export default mongoose.model("Submission", SubmissionSchema);