import { Menu } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Home", to: "/" },
    { label: "Categories", to: "/categories" },
    { label: "About", to: "/about" },
  ];

  const linkClass = ({ isActive }) =>
    `hover:text-maroon transition-colors ${isActive ? "text-maroon font-semibold" : "text-ink"}`;

  return (
    <header className="border-b border-beige-card bg-white/60 backdrop-blur-sm sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <NavLink to="/" className="font-display text-xl">
          <span className="font-bold text-maroon">Hapag</span>{" "}
          <span className="text-ink">Finder</span>
        </NavLink>

        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} end>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button className="md:hidden p-2 text-maroon" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <Menu size={22} />
        </button>
      </div>

      {open && (
        <nav className="md:hidden flex flex-col gap-1 px-6 pb-4 text-sm font-medium">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} onClick={() => setOpen(false)} end>
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}