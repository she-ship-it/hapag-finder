import { Search } from "lucide-react";

export default function SearchBar({ value, onChange, onSubmit }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.();
      }}
      className="flex max-w-xl mx-auto rounded-full overflow-hidden border border-beige-card bg-white shadow-sm"
    >
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search for a recipe..."
        className="flex-1 px-5 py-3 bg-transparent outline-none text-ink placeholder:text-ink/40"
      />
      <button
        type="submit"
        className="bg-maroon text-beige px-5 flex items-center justify-center hover:bg-maroon-dark transition-colors"
        aria-label="Search"
      >
        <Search size={18} />
      </button>
    </form>
  );
}