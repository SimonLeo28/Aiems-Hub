import mongoose from "mongoose";

async function connectToDB()   
{
    await mongoose.connect("mongodb://localhost:27017/aiems-hub") 
    console.log("Connected to database.")
}

// module.exports = connectToDB
export default connectToDB