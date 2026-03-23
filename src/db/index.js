import mongoose from "mongoose";

const connectDB = async () => {
    try{
        const connection = await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log("MongoDb Connected")
    }catch{
        console.log("MongoDb Not Connected")
    }
}

export default connectDB