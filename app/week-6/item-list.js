"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy ] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    return a.category.localeCompare(b.category);
  })
  return (
    <div className="mt-7">
      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded-full text-[0.75rem] font-black uppercase tracking-[0.08em] transition ${
            sortBy === "name"
              ? "bg-fuchsia-300 text-slate-900"
              : "border border-fuchsia-200/40 text-fuchsia-100/90 hover:border-fuchsia-100"
          }`}
        >
          Sort by Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded-full text-[0.75rem] font-black uppercase tracking-[0.08em] transition ${
            sortBy === "category"
              ? "bg-fuchsia-300 text-slate-900"
              : "border border-fuchsia-200/40 text-fuchsia-100/90 hover:border-fuchsia-100"
          }`}
        >
          Sort by Category
        </button>
      </div>
    <ul className="grid gap-3 sm:grid-cols-2">
      {sortedItems.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </ul>
  </div>
  );
}
