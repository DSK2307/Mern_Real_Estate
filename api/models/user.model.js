import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {

    },
    email: {

    },
    password: {

    },


}, { timestamps: true });

const USer = mongoose.model("User", userSchema);

export default User;

