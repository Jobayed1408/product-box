"use client";
import { useEffect, useState } from "react";

export default function Categories({ onSelect }) {
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState("");

  useEffect(() => {
    fetch("/api/categories")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setCategories(data);
        }
      });
  }, []);

  const handleClick = (category) => {
    setActive(category);
    onSelect(category);
  };

  return (
    <section className="pb-10">
      <h3 className="text-xl font-semibold mb-10 capitalize">CATEGORIES</h3>

      <div className="flex flex-wrap gap-3 w-full">
        {/* All */}
        <button
          onClick={() => handleClick("")}
          className={`btn  w-full ${
            active === "" ? "btn-primary" : "btn-outline"
          }`}
        >
          All
        </button>

        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => handleClick(cat)}
            className={`btn  w-full text-sm capitalize ${
              active === cat ? "btn-primary" : "btn-outline"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </section>
  );
}
