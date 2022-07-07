import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import {BackToTop} from './components/backToTop/BackToTop';
import Works from './components/Works';
import ContactMe from './components/ContactMe';
import Resume from './components/Resume';
import ProjectGrid from './components/projects/ProjectGrid';
import Project from './components/projects/Project';
import Footer from './components/Footer';
import { createContext, useState } from "react";
import {Routes, Route} from "react-router-dom"
import RelatedProjects from './components/projects/RelatedProjects';
import Main from './components/main/Main';


export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>
      <NavBar />
      <Main/>
      <BackToTop/>
      <Footer/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;


/* import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
} */