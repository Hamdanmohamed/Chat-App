import express from 'express';
import dotenv from 'dotenv';
import authroutes from './routes/auth.route.js';
import { connectDB } from './utils/connectDB.js';
import cookieParser from 'cookie-parser';
import messageroutes from "./routes/message.route.js";
const app = express();

dotenv.config()

app.use(express.json());
app.use(cookieParser());
const Port = process.env.PORT;


app.use("/api/auth",authroutes)
app.use("/api/message",messageroutes)



app.listen(Port,()=>{
    console.log(`server is running on port in ${Port}`);
    connectDB()
});