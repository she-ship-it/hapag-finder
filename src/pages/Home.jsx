import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import RecipeCard from "../components/RecipeCard";
import { recipes } from "../data/recipes";

export default function Home() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Recipes");

  const featured = recipes.filter((r) => r.featured);

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat);
    navigate(`/recipes?cat=${encodeURIComponent(cat)}`);
  };

  const handleSearchSubmit = () => {
    navigate(`/recipes?search=${encodeURIComponent(search)}`);
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
          Featured Recipes
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((r) => (
            <RecipeCard key={r.id} recipe={r} />
          ))}
        </div>

        <div className="text-center mt-14">
          <h3 className="font-display font-semibold text-xl mb-4">
            Hungry for More Recipes?
          </h3>
          <button
            onClick={() => navigate("/recipes")}
            className="bg-maroon text-beige px-8 py-3 rounded-full font-semibold hover:bg-maroon-dark transition-colors"
          >
            Browse All Recipes
          </button>
        </div>
      </main>
    </>
  );
}