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
      className="max-w-md mx-auto bg-white p-4 rounded shadow space-y-4"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1 text-blue-400">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          className="w-full p-2 rounded-md border border-gray-300"
        />
      </div>
      <div className="flex gap-3">
        <div className="flex-1">
          <label htmlFor="quantity" className="block text-sm font-medium mb-1 text-blue-400">
            Quantity
          </label>
          <input
            id="quantity"
            type="number"
            min="1"
            max="99"
            value={quantity}
            onChange={(event) => setQuantity(Number(event.target.value))}
            className="w-full p-2 rounded-md border border-gray-300"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="category" className="block text-sm font-medium mb-1 text-blue-400">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="w-full p-2 rounded-md border border-gray-300"
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
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
      >
        +
      </button>
    </form>
  );
}
