import "./style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState } from "react";
import ThemeContext from "./helpers/ThemeContext";

//PAGES
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import FindClub from "./pages/FindClub";
import YouPlay from "./pages/YouPlay";
import Leagues from "./pages/Leagues";
import Tournaments from "./pages/Tournaments";
import Camps from "./pages/Camps";
import Individual from "./pages/Individual";

const App = () => {

  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
    console.log(theme)
  }
  
  return (
    <Router>
      <ThemeContext.Provider value={{ theme, toggleTheme  }}>
        <Navbar />
        <main>
          <div className="page-container">
            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/about_us" element={<AboutUs />} />
              <Route path="/find_club" element={<FindClub />} />
              <Route path="/you_play" element={<YouPlay />} />
              <Route path="/leagues" element={<Leagues />} />
              <Route path="/tournaments" element={<Tournaments />} />
              <Route path="/camps" element={<Camps />} />
              <Route path="/individual" element={<Individual />} />
            </Routes>
          </div>
        </main>
      </ThemeContext.Provider>
    </Router>
  );
};

export default App;
