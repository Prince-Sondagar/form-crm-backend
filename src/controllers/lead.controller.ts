import Form from '../models/form.model';
import Leads from '../models/leads.model';



export const createLead = async (req: any, res: any) => {
    try {
        console.log("req ====>", req.params)
        const { formId } = req.params;
        const form = await Form.findOne({ formId });

        if (!form) return res.status(404).json({ message: "Form not found" });

        const submission = await Leads.create({
            formId,
            data: req.body,
        });

        res.status(201).json({ message: "Submission successful", submission });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err });
    }
};



export const getAllLeads = async (req: any, res: any) => {
    try {
        const leads = await Leads.find();

        res.status(200).send({ message: "Leads fetched  successful", leads });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err });
    }
};
