import { useParams, Link } from "react-router-dom";
import { Clock, ChefHat, Star, ArrowLeft, ChevronRight } from "lucide-react";
import { recipes } from "../data/recipes";

export default function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === Number(id));

  if (!recipe) {
    return (
      <main className="max-w-3xl mx-auto px-6 py-16 text-center">
        <p className="text-ink/70 mb-4">Recipe not found.</p>
        <Link to="/" className="text-maroon font-semibold">← Back to Home</Link>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-10">
      <Link to="/" className="inline-flex items-center gap-1 text-sm text-ink/70 hover:text-maroon mb-6">
        <ArrowLeft size={16} /> Back to recipes
      </Link>

      <div className="h-56 md:h-72 bg-beige-card rounded-xl flex items-center justify-center text-ink/40 mb-6">
        Recipe Image
      </div>

      <h1 className="font-display font-bold text-3xl text-maroon mb-2">{recipe.title}</h1>

      <div className="flex items-center gap-5 text-sm text-ink/70 mb-3">
        <span className="flex items-center gap-1"><Clock size={15} /> {recipe.time}</span>
        <span className="flex items-center gap-1"><ChefHat size={15} /> {recipe.difficulty}</span>
        <span className="flex items-center gap-0.5 text-turmeric">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={15} fill={i < recipe.rating ? "currentColor" : "none"} />
          ))}
        </span>
      </div>

      <div className="flex gap-2 flex-wrap mb-10">
        {recipe.tags.map((tag) => (
          <span
            key={tag.label}
            className={`text-xs font-semibold px-2 py-1 rounded ${
              tag.color === "maroon" ? "bg-maroon text-beige" : "bg-turmeric text-beige"
            }`}
          >
            {tag.label}
          </span>
        ))}
      </div>

      <section className="mb-10">
        <h2 className="font-display font-semibold text-xl text-ink mb-4 border-b border-beige-card pb-2">
          Ingredients
        </h2>
        <ul className="space-y-2">
          {recipe.ingredients.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-ink/85">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-maroon shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-display font-semibold text-xl text-ink mb-4 border-b border-beige-card pb-2">
          Steps
        </h2>
        <ol className="space-y-5">
          {recipe.steps.map((step, i) => (
            <li key={i} className="flex gap-4">
              <span className="shrink-0 w-8 h-8 rounded-full bg-maroon text-beige font-semibold flex items-center justify-center text-sm">
                {i + 1}
              </span>
              <p className="text-ink/85 pt-1">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <div className="mt-12 text-center">
        <Link
          to="/"
          className="inline-flex items-center gap-1 bg-maroon text-beige px-6 py-3 rounded-full font-semibold hover:bg-maroon-dark transition-colors"
        >
          Browse More Recipes <ChevronRight size={16} />
        </Link>
      </div>
    </main>
  );
}