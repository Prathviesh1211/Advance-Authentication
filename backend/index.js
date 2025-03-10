import express from "express"
import { connectDb } from "./db/connectDB.js";
import authRoutes from './routes/auth.route.js'
import dotenv from "dotenv";

dotenv.config();

const app=express();

const PORT=process.env.PORT;
app.get('/',(req,res)=>{
    res.send("Hello world")
})

app.use('/api/auth',authRoutes);

app.listen(3000,()=>{
    connectDb()
    console.log("Server is runnning on PORT :" ,PORT)
})

