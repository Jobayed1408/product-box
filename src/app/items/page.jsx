"use client";

import Categories from "@/components/Categories";
import ItemCard from "@/components/ItemCard";
// import items from "../../data/product.json";
import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

export default function ItemsPage() {

  const { data: session, status } = useSession();
  const shown = useRef(false);
  const [items, setItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetch("/api/items")
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  useEffect(() => {
    const url = category
      ? `/api/searchProduct?category=${category}`
      : "/api/searchProduct";

    fetch(url)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [category]);

  // console.log("Products:", products); 
  // console.log("Items:", items);

  useEffect(() => {
    if (status === "authenticated" && !shown.current) {
      toast.success(
        `Welcome ${session.user.name || session.user.email}`
      );
      shown.current = true;
    }
  }, [status, session]);
  //   const items = await getItems();

  return (
    <section className="py-5 min-h-screen ">

      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl text-center font-bold">
          All Products
        </h1>
        <p className="mt-3 text-gray-500">
          Explore our collection of available products
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 col-span-12 gap-6 place-items-center md:place-items-start">

        <aside className="col-span-12 md:col-span-3 place-items-center">
          <Categories onSelect={setCategory} />
        </aside>
        <aside className=" col-span-12 md:col-span-9 place-items-center">



          {/* Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map(item => (
              <ItemCard key={item._id} item={item} />
            ))}
          </div>

          {/* Empty State */}
          {products.length === 0 && (
            <p className="text-center text-gray-500 mt-10">
              No products available.
            </p>
          )}

        </aside>
      </div>
    </section>
  );
}
