import { dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Link from "next/link";

export default async function ProductDetailsPage({ params }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  // console.log("Product ID:", id);

  const collection = await dbConnect("products");
  const product = await collection.findOne({ _id: new ObjectId(id) });

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-xl font-semibold text-red-500">
          Product not found
        </p>
      </div>
    );
  }

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">
        <Link
          href="/items"
          className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-focus transition mb-6"
        >
          ← Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start bg-white rounded-xl shadow-lg p-1 md:p-8">
          {/* Product Image */}
          <div className="flex justify-center items-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-h-[450px] object-contain rounded-lg shadow-md"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-start space-y-6">
            <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>

            <div className="flex flex-col space-y-2">
              <p className="text-sm text-gray-500">
                <span className="font-semibold text-gray-700">Category:</span>{" "}
                {product.category}
              </p>
              <p className="text-2xl font-bold text-primary">${product.price}</p>
            </div>

            <div className="flex space-x-4 mt-4">
              <button className="btn btn-primary flex-1 py-3 text-lg hover:scale-105 transition-transform">
                Buy Now
              </button>
              <button className="btn btn-outline flex-1 py-3 text-lg hover:scale-105 transition-transform">
                Add to Cart
              </button>
            </div>

            <div className="flex justify-between mt-4 text-sm text-gray-500">
              <span>Stock: {product.stock}</span>
              <span>Sold: {product.sold}</span>
              <span>Rating: {product.ratings} ⭐</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
