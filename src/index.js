// require('dotenv').config({path: './env'})

import dotenv from 'dotenv'
import connect_DB from './db/index.js'
import app from './app.js';
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";





connect_DB()
.then(()=>{
    app.listen(process.env.PORT || 4000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.error("Error during DB connection:", error);
    // process.exit(1);
});




/*
import express from "express";
const app = express();

;( async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.error("Error in server setup", error);
            throw error;
        });

        app.listen(process.env.PORT, () => {
                console.log(`Server is running on port ${process.env.PORT}`);
            });

    } catch (error) {
        console.error("Error connecting to the database", error);
        throw error;
    }
})()
    */