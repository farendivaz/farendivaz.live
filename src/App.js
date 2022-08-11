// import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import Contact from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NavbarBottom from "./components/NavbarBottom";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./components/useDarkMode";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes";

function App() {
  const [theme, themeToggler, mountedComponent, dark] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  if (!mountedComponent) return <div />;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Router>
        <Navbar theme={theme} toggleTheme={themeToggler} dark={dark} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
        <NavbarBottom />
      </Router>
    </ThemeProvider>
  );
}

export default App;
