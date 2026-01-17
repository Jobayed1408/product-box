import { dbConnect } from "@/lib/dbConnect";

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      name,
      image,
      category,
      price,
      stock,
      sold,
      ratings,  
      description,
    } = body;

    // basic validation
    if (!name || !category || !price) {
      return Response.json(
        { message: "Required fields missing" },
        { status: 400 }
      );
    }

    const product = {
      name,
      image,
      category,
      price: Number(price),
      stock: Number(stock),
      sold: Number(sold),
      ratings,
      description,
      createdAt: new Date(),
    };

    const collection = await dbConnect("products");
    const result = await collection.insertOne(product);

    return Response.json(
      { message: "Product added successfully", result },
      { status: 201 }
    );
  } catch (error) {
    console.error("ADD PRODUCT ERROR:", error);
    return Response.json(
      { message: "Failed to add product" },
      { status: 500 }
    );
  }
}
