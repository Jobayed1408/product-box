import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConnect";

export async function GET() {
    try {
        const collection = await dbConnect("products");

        const popularItems = await collection.find()
            .sort({ sold: -1 })
            .limit(6)
            .toArray();

        return NextResponse.json(popularItems);
    } catch (error) {
        return NextResponse.json(
            { message: "Failed to fetch items" },
            { status: 500 }
        );
    }
}
