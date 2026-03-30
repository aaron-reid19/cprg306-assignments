"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../../contexts/AuthContext";
import NewItem from "./newItem";
import ItemList from "./item-list";
import MealIdeas from "./MealIdeas";
import itemsData from "./items.json";

function normalizeIngredient(itemName) {
  return (
    itemName
      .split(",")[0]
      .toLowerCase()
      .replace(/[^a-z\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .split(" ")[0] || ""
  );
}

export default function Page() {
  const { user, firebaseSignOut } = useUserAuth();
  const router = useRouter();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  useEffect(() => {
    if (!user) {
      router.push("/week-9");
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  const handleAddItem = (newItem) => {
    setItems((prev) => [...prev, newItem]);
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
      router.push("/week-9");
    } catch (error) {
      console.error("sign-out failed", error);
    }
  };

  function handleItemSelect(item) {
    setSelectedItemName(normalizeIngredient(item.name));
  }

  return (
    <main className="min-h-screen bg-slate-100 py-8 px-4">
      <div className="mx-auto max-w-6xl rounded-2xl bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h1 className="text-3xl font-semibold text-slate-800 tracking-tight">
            Shopping List
          </h1>
          <button
            onClick={handleSignOut}
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            Log out
          </button>
        </div>
        <NewItem onAddItem={handleAddItem} />

        <div className="mt-6 grid gap-8 lg:grid-cols-[2fr_1fr]">
          <ItemList items={items} onItemSelect={handleItemSelect} />
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <MealIdeas ingredient={selectedItemName} />
          </div>
        </div>
      </div>
    </main>
  );
}
