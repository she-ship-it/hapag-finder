import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "./Home";
import CategoriesPage from "./CategoriesPage";
import AboutPage from "./AboutPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
}