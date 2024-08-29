import mongoose, { Schema, model } from "mongoose";
export interface UserDocument {
  _id: string;
  gender:string;
  humanrace:string;
  fullname:string;
  birthday:Date;
  
  email: string;
  password: string;
  name: string;
  phone: string;
  avatar: string;
  coverImg: string;
  createdAt: Date;
  updatedAt: Date;
}
const UserSchema = new Schema<UserDocument>(
  {
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Email is invalid",
      ],
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: [true, "Name is required"],
    },
  },
  {
    timestamps: true,
  }
);
