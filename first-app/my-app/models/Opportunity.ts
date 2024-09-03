import mongoose, { ObjectId, Schema, model } from "mongoose";
interface OpportunityDocument {
  _id: string;
  name: string;
  provider: ObjectId;
  amount: number;
  from: Date;
  to: Date;
  createdAt: Date;
  updatedAt: Date;
  status: string;
}
const OpportunitySchema = new Schema<OpportunityDocument>(
  {
    name: {
      type: String,
      required: [true, "Opportunity'name is required!"],
    },
    provider: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: [true, "Provider is required!"],
    },
    amount: {
      type: Number,
      required: [true, "Amount is required!"],
    },
    from: {
      type: Date,
      required: [true, "From is required"],
    },
    to: {
      type: Date,
      required: [true, "To is required"],
    },
    status:{
      type: String,
      enum: [
        'pending',
        'approved',
        'rejected'
      ],
      default:"pending"
    }
  },
  { timestamps: true }
);
const Opportunity = mongoose.models.Opportunity || model<OpportunityDocument>("Opportunity", OpportunitySchema)
export default Opportunity;