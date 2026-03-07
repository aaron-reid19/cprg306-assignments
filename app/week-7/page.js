"use client";

import { useState } from "react";
import NewItem from "./newItem"
import ItemList from "./item-list"
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems((prev) => [...prev, newItem]);
  };

  return (
    <main className="min-h-screen bg-slate-100 py-8 px-4">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-semibold text-slate-800 mb-6 tracking-tight">
          Shopping List
        </h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
      </div>
    </main>
  );
}
