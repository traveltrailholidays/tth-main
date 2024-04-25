import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import ContactModel from "@/models/Contact.models";

// Establish database connection
dbConnect();

export async function POST(req: NextRequest) {
    const { name, email, phone, subject, message } = await req.json();
    const newData = await ContactModel.create({ name, email, phone, subject, message });
    return NextResponse.json({
        msg:"ok",
        data: newData
    })
}
