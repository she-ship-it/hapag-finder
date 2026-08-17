export default function FilterPill({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors
        ${
          active
            ? "bg-maroon text-beige"
            : "bg-white text-ink border border-beige-card hover:border-maroon"
        }`}
    >
      {label}
    </button>
  );
}