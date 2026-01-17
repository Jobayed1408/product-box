"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function AddProduct() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const productData = {
      name: form.name.value,
      image: form.image.value,
      category: form.category.value,
      price: form.price.value,
      stock: form.stock.value,
      sold: 0,
      ratings: form.ratings.value,
      description: form.description.value,
    };

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("✅ Product added successfully");
        form.reset();
        router.push("/"); // or /products
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("❌ Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-2xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Add New Product
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          name="name"
          placeholder="Product Name"
          className="input input-bordered w-full"
          required
        />

        <input
          name="image"
          placeholder="Image URL"
          className="input input-bordered w-full"
        />

        <input
          name="category"
          placeholder="Category"
          className="input input-bordered w-full"
          required
        />

        <input
          name="price"
          type="number"
          step="0.01"
          placeholder="Price"
          className="input input-bordered w-full"
          required
        />

        <input
          name="stock"
          type="number"
          placeholder="Stock"
          className="input input-bordered w-full"
        />

        

        <input
          name="ratings"
          type="text"
          placeholder="Ratings"
          className="input input-bordered w-full"
        />

        <textarea
          name="description"
          placeholder="Description"
          className="textarea textarea-bordered w-full"
        />

        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Product"}
        </button>

      </form>
    </section>
  );
}
