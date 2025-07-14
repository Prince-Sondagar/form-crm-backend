import express from 'express';
import cors from 'cors';
import formRoutes from './routes/form.routes';
import dotenv from 'dotenv';
import connectDB from './config/db';


dotenv.config();
connectDB();


const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/forms', formRoutes);


export default app;
