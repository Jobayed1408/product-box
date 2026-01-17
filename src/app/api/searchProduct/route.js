import { dbConnect } from "@/lib/dbConnect";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");

    const collection = await dbConnect("products");

    let query = {};
    if (category) {
      query.category = category;
    }

    const products = await collection.find(query).toArray();

    return Response.json(products);
  } catch (error) {
    return Response.json(
      { message: "Failed to load products" },
      { status: 500 }
    );
  }
}
