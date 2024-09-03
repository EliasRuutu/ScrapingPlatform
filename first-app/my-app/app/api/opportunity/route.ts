
import { NextRequest, NextResponse } from "next/server";
import Opportunity from "@/models/Opportunity";
import { connectDB } from "@/lib/mongodb";
import { getToken } from "next-auth/jwt";
import { ObjectId } from "mongodb";

interface User {
  _id: ObjectId;
  name: string;
  email: string;
}
export const GET = async () => {
  await connectDB();
  // if (req.query?.id) {
  //   // const opportunity =
  // }
  //return //All users
  const opportunities = await Opportunity.find();
  return NextResponse.json(opportunities);
  // res.json({})
};
export const POST = async (req: NextRequest) => {
  //create New Opportunity
  const data = await req.json();
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const opp = await Opportunity.insertMany([
    { ...data, provider: (token?.user as User)._id, status: "pending" },
  ]);
  return NextResponse.json(opp);
};
export const DELETE = async (req: NextRequest) => {
  const id = req.nextUrl.searchParams.get("id");
  const result = await Opportunity.findByIdAndDelete(id);
  return NextResponse.json(result);
};
export const PUT = async (req: NextRequest) => {
  const data = await req.json();
  const id = data.id;
  delete data.id;
  const result = await Opportunity.findByIdAndUpdate(id, data);
  return NextResponse.json(result);
  ///Update
};
