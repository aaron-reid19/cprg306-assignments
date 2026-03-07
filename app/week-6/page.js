"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./newItem";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems((currentItems) => [...currentItems, newItem]);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#4c1d95] py-8 px-4 text-white">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-fuchsia-300/20 bg-white/5 p-6 backdrop-blur-xl shadow-[0_20px_60px_rgba(12,10,43,0.45)]">
        <h1 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 to-amber-300 mb-6">
          Shopping List
        </h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </div>
    </main>
  );
}
