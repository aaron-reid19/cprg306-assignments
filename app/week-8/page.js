"use client";

import { useState } from "react";
import NewItem from "./newItem"
import ItemList from "./item-list"
import MealIdeas from "./MealIdeas";
import itemsData from "./items.json";

function normalizeIngredient(itemName) {
  return itemName
    .split(",")[0]
    .toLowerCase()
    .replace(/[^a-z\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")[0] || "";
}

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prev) => [...prev, newItem]);
  };

  function handleItemSelect(item) {
    setSelectedItemName(normalizeIngredient(item.name));
  }

  return (
    <main className="min-h-screen bg-slate-100 py-8 px-4">
      <div className="mx-auto max-w-6xl rounded-2xl bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-semibold text-slate-800 mb-6 tracking-tight">
          Shopping List
        </h1>
        <NewItem onAddItem={handleAddItem} />

        <div className="mt-6 grid gap-8 lg:grid-cols-[2fr_1fr]">
          <ItemList
            items={items}
            onItemSelect={handleItemSelect}
          />
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <MealIdeas ingredient={selectedItemName} />
          </div>
        </div>
      </div>
    </main>
  );
}
