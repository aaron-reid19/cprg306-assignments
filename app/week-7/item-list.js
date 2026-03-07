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
    <div className="mt-6">
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setSortBy("name")}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition ${
            sortBy === "name"
              ? "bg-slate-900 text-white"
              : "bg-slate-200 text-slate-700 hover:bg-slate-300"
          }`}
        >
          Sort by Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition ${
            sortBy === "category"
              ? "bg-slate-900 text-white"
              : "bg-slate-200 text-slate-700 hover:bg-slate-300"
          }`}
        >
          Sort by Category
        </button>
      </div>
    <ul className="grid gap-3 sm:grid-cols-2">
      {sortedItems.map((item, index) => (
        <Item
          key={`${item.name}-${item.category}-${index}`}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </ul>
  </div>
  );
}
