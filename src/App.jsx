import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import HomePage from "./pages/HomePage";
import ErorPage from "./pages/ErorPage";
import ScrollToTop from "./components/ScrollToTop";
import AboutPage from "./pages/AboutPage";
import LayoutRoot from "./pages/LayoutRoot";
import BlogPage from "./pages/BLogPage";
import DynamicBlogPage from "./pages/DynamicBlogPage";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/" element={<LayoutRoot />}>
              <Route path="about" element={<AboutPage />} />
              <Route path="blade-runner2049" element={<BlogPage />} />
              <Route path=":blogLink" element={<DynamicBlogPage />} />{" "}
              {/* Rute dinamis */}
            </Route>
            <Route path="*" element={<ErorPage />} />
          </Routes>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
