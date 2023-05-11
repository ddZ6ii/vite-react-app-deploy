import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Page from "./pages/Page";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import "./App.css";

export default function App() {
  const base = import.meta.env.VITE_BASE;
  return (
    <div className="wrapper grid min-h-screen grid-cols-1 grid-rows-[auto_1fr_auto]">
      <header className="py-2 bg-neutral-900 text-neutral-50">
        <NavBar />
      </header>
      <main className="main__container py-4 px-8">
        <Routes>
          <Route path={base} element={<Home />} />
          <Route path={base + "contact"} element={<Contact />} />
          <Route path={base + "about"} element={<About />} />
          <Route path={base + "page"} element={<Page />} />
          <Route path={base + "*"} element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
