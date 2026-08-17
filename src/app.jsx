import { useState, useMemo } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import RecipeCard from "./components/RecipeCard";
import { recipes } from "./data/recipes";

export default function App() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Recipes");

  const filtered = useMemo(() => {
    return recipes.filter((r) => {
      const matchesCategory =
        activeCategory === "All Recipes" || r.category === activeCategory;
      const matchesSearch = r.title
        .toLowerCase()
        .includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  return (
    <div className="min-h-screen bg-beige">
      <Header />
      <Hero
        search={search}
        onSearch={setSearch}
        activeCategory={activeCategory}
        onCategory={setActiveCategory}
      />

      <main className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="font-display font-semibold text-2xl text-ink mb-6 border-b border-beige-card pb-3">
          Featured Recipes
        </h2>

        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((r) => (
              <RecipeCard key={r.id} recipe={r} />
            ))}
          </div>
        ) : (
          <p className="text-ink/60 text-center py-12">
            No recipes match your search yet — try another dish or category.
          </p>
        )}

        <div className="text-center mt-14">
          <h3 className="font-display font-semibold text-xl mb-4">
            Hungry for More Recipes?
          </h3>
          <button className="bg-maroon text-beige px-8 py-3 rounded-full font-semibold hover:bg-maroon-dark transition-colors">
            Browse All Recipes
          </button>
        </div>
      </main>
    </div>
  );
}