import mongoose from "mongoose";
import { DB_NAME} from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected  !! DB Host : ${process.env.MONGODB_URI} DB Name : ${DB_NAME} `);
        return connectionInstance;
    } catch (error) {
        console.log("\n MongoDB connection error !! DB Host ",error);
        process.exit(1);
    }
        
 }

export default connectDB;
