import SearchBar from "./SearchBar";
import FilterPill from "./FilterPill";

const categories = ["All Recipes", "Lutong Bahay", "Regional", "Desserts"];

export default function Hero({ search, onSearch, activeCategory, onCategory }) {
  return (
    <section className="weave-texture py-16 px-6 text-center">
      <h1 className="font-display font-bold text-5xl md:text-6xl text-ink mb-3">
        Hapag Finder
      </h1>
      <p className="text-ink/70 mb-8">
        Discover the Flavors of Filipino Cuisine
      </p>

      <SearchBar value={search} onChange={onSearch} />

      <div className="flex flex-wrap justify-center gap-3 mt-6">
        {categories.map((cat) => (
          <FilterPill
            key={cat}
            label={cat}
            active={activeCategory === cat}
            onClick={() => onCategory(cat)}
          />
        ))}
        <button className="px-4 py-1.5 rounded-full text-sm font-semibold bg-white border border-beige-card text-ink hover:border-maroon transition-colors">
          Advanced Filters
        </button>
      </div>
    </section>
  );
}