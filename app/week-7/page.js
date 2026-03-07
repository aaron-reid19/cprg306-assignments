 "use client";

import { useState } from "react";
import NewItem from "./newItem"
import ItemList from "./item-list"
import ItemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(ItemsData);

  const handleAddItem = (newItem) => {
    setItems((currentItems) => [...currentItems, { ...newItem, id: crypto.randomUUID() }]);
  };

  return (
    <main>
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}
