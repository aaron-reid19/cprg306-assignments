"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = {
      id: crypto.randomUUID(),
      name,
      quantity,
      category,
    };

    onAddItem(item);

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-fuchsia-200/25 bg-gradient-to-br from-fuchsia-900/45 to-indigo-900/35 p-5 space-y-4 backdrop-blur-sm"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-xs uppercase tracking-[0.2em] text-fuchsia-100/90 mb-2"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          className="w-full rounded-xl border border-fuchsia-300/40 bg-black/25 px-3 py-2.5 text-white placeholder:text-white/40 focus:outline-none focus:border-fuchsia-300 focus:ring-2 focus:ring-fuchsia-300/40"
        />
      </div>
      <div className="flex gap-3">
        <div className="flex-1">
          <label
            htmlFor="quantity"
            className="block text-xs uppercase tracking-[0.2em] text-fuchsia-100/90 mb-2"
          >
            Quantity
          </label>
          <input
            id="quantity"
            name="quantity"
            type="number"
            min="1"
            max="99"
            value={quantity}
            onChange={(event) => setQuantity(Number(event.target.value))}
            className="w-full rounded-xl border border-fuchsia-300/40 bg-black/25 px-3 py-2.5 text-white placeholder:text-white/40 focus:outline-none focus:border-fuchsia-300 focus:ring-2 focus:ring-fuchsia-300/40"
          />
        </div>
        <div className="flex-1">
          <label
            htmlFor="category"
            className="block text-xs uppercase tracking-[0.2em] text-fuchsia-100/90 mb-2"
          >
            Category
          </label>
          <select
            id="category"
            name="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="w-full rounded-xl border border-fuchsia-300/40 bg-black/25 px-3 py-2.5 text-white focus:outline-none focus:border-fuchsia-300 focus:ring-2 focus:ring-fuchsia-300/40"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen-foods">Frozen Foods</option>
            <option value="canned-goods">Canned Goods</option>
            <option value="dry-goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="relative w-full overflow-hidden rounded-xl py-2.5 font-black tracking-[0.1em] text-sm uppercase text-white"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-amber-400 opacity-95" />
        <span className="relative">Add item</span>
      </button>
    </form>
  );
}
