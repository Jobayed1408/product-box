"use client";

import { useEffect, useState } from "react";
import ItemCard from "../ItemCard";

export default function PopularItems() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const res = await fetch("/api/popularItems");
      const data = await res.json();
      setItems(data);
      setLoading(false);
    };

    fetchItems();
  }, []);

  if (loading) {
    return <p className="text-center py-20">Loading products...</p>;
  }

  return (
    <section className="py-16 bg-base-200">
      <div className="container mx-auto px-2 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Popular Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <ItemCard key={item._id} item={item} />
            // <div key={item._id} className="card bg-base-100 shadow-md">
            //   <div className="card-body">
            //     <h3 className="card-title">{item.name}</h3>
            //     <p className="text-primary font-semibold">
            //       ৳ {item.price}
            //     </p>

            //     <button className="btn btn-sm btn-outline mt-4">
            //       View Details
            //     </button>
            //   </div>
            // </div>
          ))}
        </div>
      </div>
    </section>
  );
}
