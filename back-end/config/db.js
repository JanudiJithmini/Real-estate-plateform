import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://Janudi2002:12345678a@cluster0.8kywxsj.mongodb.net/RealState")
        .then(() => console.log("MongoDB connected"))
        .catch((err) => console.log(err));
}