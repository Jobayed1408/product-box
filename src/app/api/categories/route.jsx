import { dbConnect } from "@/lib/dbConnect";

export async function GET() {
  try {
    const collection = await dbConnect("products");

    const categories = await collection
      .aggregate([
        { $group: { _id: "$category" } },
        { $project: { _id: 0, category: "$_id" } },
      ])
      .toArray();

    // Convert to simple array
    const result = categories.map(c => c.category);

    return Response.json(result);
  } catch (error) {
    console.error("CATEGORY API ERROR:", error);

    return Response.json(
      { message: "Failed to load categories" },
      { status: 500 }
    );
  }
}
