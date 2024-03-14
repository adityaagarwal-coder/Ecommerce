import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();

const connectDB = async ()=>{
    // console.log(process.env.MONGO_URI);
    try {
        const conn = await mongoose.connect("mongodb://localhost:27017");
        console.log(`Mongoose Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;