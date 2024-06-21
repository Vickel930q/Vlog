import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    // fullName:{
    //     type: String,
    //     required: true
    // },
    email:{
        type: String,
        required: true,
    },
    // password:{
    //     type:String,
    //     required: true,
    // },
   
},
{timestamps: true}
);
const User = models || mongoose.models("User", userSchema)
export default User

