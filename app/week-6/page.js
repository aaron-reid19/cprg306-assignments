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
    <main>
        <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}
