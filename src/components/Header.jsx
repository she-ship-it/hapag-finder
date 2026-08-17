import { Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const links = ["Home", "Categories", "About"];

  return (
    <header className="border-b border-beige-card bg-white/60 backdrop-blur-sm sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="font-display text-xl">
          <span className="font-bold text-maroon">Hapag</span>{" "}
          <span className="text-ink">Finder</span>
        </a>

        <nav className="hidden md:flex gap-8 text-sm font-medium text-ink">
          {links.map((link) => (
            <a key={link} href="#" className="hover:text-maroon transition-colors">
              {link}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden p-2 text-maroon"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <Menu size={22} />
        </button>
      </div>

      {open && (
        <nav className="md:hidden flex flex-col gap-1 px-6 pb-4 text-sm font-medium">
          {links.map((link) => (
            <a key={link} href="#" className="py-2 text-ink hover:text-maroon">
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}