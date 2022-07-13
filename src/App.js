import './App.css';
import NavBar from './components/NavBar';
import {BackToTop} from './components/backToTop/BackToTop';
import Footer from './components/Footer';
import { createContext, useState } from "react";
import Main from './components/main/Main';


export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

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