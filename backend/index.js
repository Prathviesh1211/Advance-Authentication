import express from "express"
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from 'cors'

import authRoutes from './routes/auth.route.js'
import { connectDb } from "./db/connectDB.js";

dotenv.config();

const app=express();
const PORT=process.env.PORT;

app.use(cors({origin:'http://localhost:5173',credentials:true}))

app.use(express.json())
app.use(cookieParser())

app.get('/',(req,res)=>{
    res.send("Hello world")
})

app.use('/api/auth',authRoutes);

app.listen(PORT,()=>{
    connectDb()
    console.log("Server is runnning on PORT :" ,PORT)
})

