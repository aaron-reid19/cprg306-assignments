"use client";
import { useState } from "react";

const initialState = {
  name: "",
  quantity: 1,
  category: "produce",
};

export default function NewItem({ onAddItem }) {
  const [item, setItem] = useState(initialState);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const newValue = type === "number" ? Number(value) : value;
    setItem((prevItem) => ({ ...prevItem, [name]: newValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = { ...item };

    if (onAddItem) {
      onAddItem(newItem);
    }

    setItem(initialState);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-slate-200 bg-slate-50 p-4 md:p-5 space-y-4"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-slate-700 mb-1"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={item.name}
          onChange={handleChange}
          required
          className="w-full p-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-slate-400"
        />
      </div>
      <div className="flex gap-3">
        <div className="flex-1">
          <label
            htmlFor="quantity"
            className="block text-sm font-semibold text-slate-700 mb-1"
          >
            Quantity
          </label>
          <input
            id="quantity"
            name="quantity"
            type="number"
            min="1"
            max="99"
            value={item.quantity}
            onChange={handleChange}
            className="w-full p-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-slate-400"
          />
        </div>
        <div className="flex-1">
          <label
            htmlFor="category"
            className="block text-sm font-semibold text-slate-700 mb-1"
          >
            Category
          </label>
          <select
            id="category"
            name="category"
            value={item.category}
            onChange={handleChange}
            className="w-full p-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-slate-400"
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
        className="w-full rounded-lg bg-slate-900 py-2.5 text-white font-semibold hover:bg-slate-800 transition"
      >
        +
      </button>
    </form>
  );
}
