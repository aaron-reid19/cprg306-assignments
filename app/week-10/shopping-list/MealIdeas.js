"use client"
import { useEffect, useState } from "react"

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(ingredient)}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch meal ideas");
  }

  const data = await response.json();
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function loadMealIdeas() {
      if (!ingredient) {
        setMeals([]);
        return;
      }

      setLoading(true);
      try {
        const mealResults = await fetchMealIdeas(ingredient);
        if (!cancelled) {
          setMeals(mealResults);
        }
      } catch {
        if (!cancelled) {
          setMeals([]);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadMealIdeas();

    return () => {
      cancelled = true;
    };
  }, [ingredient]);

  return (
    <div>
      <h2 className="text-xl font-semibold text-slate-900">Meal Ideas</h2>
      {ingredient ? (
        <p className="mt-1 text-sm text-slate-600">Showing ideas for: <span className="font-medium">{ingredient}</span></p>
      ) : (
        <p className="mt-1 text-sm text-slate-600">Select an item to see meal ideas.</p>
      )}

      {loading && <p className="mt-3 text-sm text-slate-500">Loading...</p>}

      {!loading && ingredient && meals.length === 0 && (
        <p className="mt-3 text-sm text-slate-500">No meal ideas found.</p>
      )}

      <ul className="mt-3 space-y-2">
        {meals.map((meal) => (
          <li key={meal.idMeal} className="rounded-md bg-white px-3 py-2 text-sm text-slate-800 border border-slate-200">
            {meal.strMeal}
          </li>
        ))}
      </ul>
    </div>
  );
}
