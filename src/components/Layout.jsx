import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Recipes");

  return (
    <div className="min-h-screen bg-beige">
      <Header />
      <Outlet context={{ search, setSearch, activeCategory, setActiveCategory }} />
    </div>
  );
}