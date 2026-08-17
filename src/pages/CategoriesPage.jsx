import { Link } from "react-router-dom";

const categories = [
  { name: "All Recipes", desc: "Lahat ng recipe sa Hapag Finder." },
  { name: "Lutong Bahay", desc: "Pang-araw-araw na ulam para sa pamilya." },
  { name: "Regional", desc: "Mga putahe mula sa iba't ibang rehiyon ng Pilipinas." },
  { name: "Desserts", desc: "Matamis na panghimagas at meryenda." },
];

export default function CategoriesPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="font-display font-bold text-3xl mb-8 text-ink">Categories</h1>
      <div className="grid sm:grid-cols-2 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            to={`/?cat=${encodeURIComponent(cat.name)}#recipes`}
            className="block bg-white border border-beige-card rounded-xl p-6 hover:shadow-md hover:border-maroon transition-all"
          >
            <h2 className="font-display font-semibold text-lg text-maroon mb-2">{cat.name}</h2>
            <p className="text-ink/70 text-sm">{cat.desc}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}