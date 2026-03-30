"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../../contexts/AuthContext";
import NewItem from "./newItem"
import ItemList from "./item-list"
import MealIdeas from "./MealIdeas";
import { getItems, addItem, deleteItem } from "../_services/shopping-list-service";

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
  const { user, firebaseSignOut } = useUserAuth();
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  const loadItems = async () => {
    if (!user) return;
  
    try {
      const userItems = await getItems(user.uid);
      console.log("Loaded items:", userItems);
      setItems(userItems);
    } catch (error) {
      console.error("Error loading items:", error);
    }
  };

  useEffect(() => {
    loadItems()
  },[user])

  const handleAddItem = async (item) => {
    if (!user) return;
  
    try {
      const id = await addItem(user.uid, item);
      console.log("Saved to Firestore with id:", id);
      setItems((prev) => [...prev, { id, ...item }]);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
      router.push("/week-10");
    } catch (error) {
      console.error("sign-out failed", error);
    }
  };

  const handleDelete = async (itemId) => {
    if (!user) return;
  
    try {
      await deleteItem(user.uid, itemId);
      setItems((prev) => prev.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  
  }

  function handleItemSelect(item) {
    const cleanedName = item.name
    .split(",")[0]
    .trim()
    .replace(/[\u{1F300}-\u{1FAFF}]/gu, "");

    setSelectedItemName(cleanedName);
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
          <ItemList
            items={items}
            onItemSelect={handleItemSelect}
            onDeleteItem={handleDelete}
          />
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <MealIdeas ingredient={selectedItemName} />
          </div>

        </div>
      </div>
    </main>
  );
}
