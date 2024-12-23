import mongoose from "mongoose";

 export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://kprahul:kprahul143@cluster0.7ewgw.mongodb.net/DeliverApp').then(()=>console.log("DB Connected"));
};