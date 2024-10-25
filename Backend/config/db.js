import mongoose, { connect } from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('').then(() => {
        console.log('DB connected');
    })
}