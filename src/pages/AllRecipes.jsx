import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Hero from "../components/Hero";
import RecipeCard from "../components/RecipeCard";
import { recipes } from "../data/recipes";

export default function AllRecipes() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [activeCategory, setActiveCategory] = useState(searchParams.get("cat") || "All Recipes");

  useEffect(() => {
    setSearch(searchParams.get("search") || "");
    setActiveCategory(searchParams.get("cat") || "All Recipes");
  }, [searchParams]);

  const filtered = useMemo(() => {
    return recipes.filter((r) => {
      const matchesCategory = activeCategory === "All Recipes" || r.category === activeCategory;
      const matchesSearch = r.title.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat);
    setSearchParams(cat === "All Recipes" ? {} : { cat });
  };

  const handleSearchSubmit = () => {
    setSearchParams(search ? { search } : {});
  };

  return (
    <>
      <Hero
        search={search}
        onSearchChange={setSearch}
        onSearchSubmit={handleSearchSubmit}
        activeCategory={activeCategory}
        onCategoryClick={handleCategoryClick}
      />

      <main className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="font-display font-semibold text-2xl text-ink mb-6 border-b border-beige-card pb-3">
          All Recipes
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
      </main>
    </>
  );
}