import mongoose, { model, Schema, ObjectId } from "mongoose";
export interface ProjecDocument {
  _id?: ObjectId;
  title: string;
  description: string;
  information: string;
  files?: Array<{ filename: String; tempname: String }>;
  opportunity: ObjectId;
  provider: ObjectId;
  status?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
const ProjectSchema = new Schema<ProjecDocument>(
  {
    title: {
      type: String,
      required: [true, "Project title is required!"],
    },
    description: {
      type: String,
      required: [true, "Project description is required!"],
    },
    information: {
      type: String,
      required: [true, "Project information is required!"],
    },
    files: {
      type: Array<{ filename: String; tempname: String }>,
    },
    opportunity: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "opportunity",
      required: [true, "Opportunity is required!"],
    },
    provider: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: [true, "Provider is required!"],
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);
const Project =
  mongoose.models.Project || model<ProjecDocument>("Project", ProjectSchema);
export default Project;
