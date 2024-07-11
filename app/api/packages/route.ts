import { NextResponse } from "next/server";
import peisma from '@/db/prismaDBConfig';
import getCurrentUser from "@/actions/getCurrentUser";

export async function POST(request:Request) {
    const currentUser = await getCurrentUser();
    if(!currentUser) {
        return NextResponse.error();
    }

    const body = await request.json();
    const {
        title, description, imageSrc, category, location, price, days, nights, rating
    } = body;

    Object.keys(body).forEach((value: any) => {
        if(!body[value]) {
            NextResponse.error();
        }
    });

    const listing = await prisma?.listing.create({
        data: {
            title, description, imageSrc, category, location, price: parseInt(price, 10), days, nights, rating, userId:currentUser.id
        }
    });

    return NextResponse.json(listing);
}