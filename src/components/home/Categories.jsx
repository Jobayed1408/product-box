"use client";

import { useEffect, useState } from "react";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/categories")
      .then(res => res.json())
      .then(data => {
        setCategories(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="py-16 text-center">
        <p className="text-gray-500">Loading categories...</p>
      </section>
    );
  }

  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Product Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="card bg-base-200 text-center p-6 hover:bg-primary hover:text-white transition cursor-pointer"
            >
              <p className="font-semibold">{category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
