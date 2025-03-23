import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const db = process.env.MONGO_DB_URI;

const dbConnect = async()=>{
    try {
        await mongoose.connect(db,)
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB", error.message);
    }
}


export default dbConnect;