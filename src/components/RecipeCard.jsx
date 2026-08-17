import { Clock, ChefHat, Star } from "lucide-react";
import { Link } from "react-router-dom";

const tagColor = {
  maroon: "bg-maroon text-beige",
  turmeric: "bg-turmeric text-beige",
};

export default function RecipeCard({ recipe }) {
  return (
    <Link
      to={`/recipes/${recipe.id}`}
      className="block bg-white rounded-xl border border-beige-card overflow-hidden hover:shadow-md hover:border-maroon transition-all"
    >
      <div className="h-40 bg-beige-card flex items-center justify-center text-ink/40 text-sm">
        Recipe Image
      </div>

      <div className="p-5">
        <h3 className="font-display font-semibold text-lg text-maroon mb-1">
          {recipe.title}
        </h3>

        <div className="flex items-center gap-4 text-sm text-ink/70 mb-3">
          <span className="flex items-center gap-1">
            <Clock size={14} /> {recipe.time}
          </span>
          <span className="flex items-center gap-1">
            <ChefHat size={14} /> {recipe.difficulty}
          </span>
        </div>

        <div className="flex gap-2 mb-3 flex-wrap">
          {recipe.tags.map((tag) => (
            <span
              key={tag.label}
              className={`text-xs font-semibold px-2 py-1 rounded ${tagColor[tag.color]}`}
            >
              {tag.label}
            </span>
          ))}
        </div>

        <div className="flex gap-0.5 text-turmeric">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={16} fill={i < recipe.rating ? "currentColor" : "none"} />
          ))}
        </div>
      </div>
    </Link>
  );
}