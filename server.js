import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
const app = express()
dotenv.config();
mongoose.set('strictQuery', true)
const connect = async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_CONNECT)
        console.log("Connected to mongoDB")
    } catch(err){
        console.log(err);
    }
}
app.listen(8800, ()=>{
    connect()
    console.log("Backend server is running")
})