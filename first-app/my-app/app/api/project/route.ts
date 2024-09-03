import { connectDB } from "@/lib/mongodb";
import { ObjectId } from "mongoose";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import Project, { ProjecDocument } from "@/models/Project";
interface User {
  _id: ObjectId;
  name: string;
  email: string;
}
export const GET = async (req: NextRequest) => {
  await connectDB();
  const projects = await Project.find();
  return NextResponse.json({ data: projects });
};
export const POST = async (req: NextRequest) => {
  const data: ProjecDocument = await req.json();
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  if (token) {
    const project = await Project.insertMany([
      { ...data, provider: (token.user as User)._id },
    ]);
    return NextResponse.json(project);
  }
};
export const DELETE = async (req: NextRequest) => {
  const id = req.nextUrl.searchParams.get("id");
  const result = await Project.findByIdAndDelete(id);
  return NextResponse.json(result);
};
export const PUT = async (req: NextRequest) => {
  const data = await req.json();
  const id = data.id;
  delete data.id;
  const result = await Project.findByIdAndUpdate(id, data);
  return NextResponse.json(result);
  ///Update
};
