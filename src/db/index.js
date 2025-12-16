import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connect_DB = async function () {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n Mongo DB connected |  connection host:${connectionInstance.connection.host}`);

    } catch (error) {
        console.error("Database connection Error:", error)
        process.exit(1);
    }
}

export default connect_DB;