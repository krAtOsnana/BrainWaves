import mongoose, {Schema, Document} from "mongoose";


import {IMessage, MessageSchema} from "./message.model"

export interface IUser extends Document {
    name: string;
    password: string;
    email: string;
    verificationCode: string;
    verificationCodeExpiry: Date;
    isVerified: boolean;
    isAcceptingMessage: boolean;
    messages: IMessage[];
}

const UserSchema: Schema<IUser> = new Schema({
    name:{
        type: String,
        require: [true, "userName is required"],
        trim: true,
        unique: true,
    },
    password:{
        type: String,
        require: [true, "password is required"],
    },
    email:{
        type: String,
        require: [true, "email is required"],
        trim: true,
        unique: true,
        match: [/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ , 'please enter a valid email']
    },
    verificationCode:{
        type: String,
        require: [true, "verificationCode is required"],
        trim: true,
        unique: true,
    },
    verificationCodeExpiry:{
        type: Date,
        require: [true, "verificationCodeExpiry is required"],
    },
    isAcceptingMessage:{
        type: Boolean,
        require: [true, "isAcceptingMessage is required"],
    },
    isVerified:{
        type: Boolean,
        default: false,
    },
    messages:[MessageSchema]
})


 const UserModel = ( mongoose.models.User as mongoose.Model<IUser> ) ||
                    ( mongoose.model<IUser>("User", UserSchema ) )

export default UserModel;