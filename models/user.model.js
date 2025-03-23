import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        minlength:1
    },
    blocked:{
        type: Boolean,
    },
    lastSeen: { type: Date, default: new Date() }
})

const User = mongoose.model("User", userSchema);


export default User;