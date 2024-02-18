import { Link, NavLink } from "react-router-dom";
import Language from "./Language";
import ThemeContext from "../helpers/ThemeContext";
import { useContext } from "react";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  let lightURLTheme = "https://www.iconbolt.com/iconsets/fluent-emoji-flat/sun.svg";
  let darkURLTheme ="https://www.iconbolt.com/iconsets/fluent-emoji-flat/crescent-moon.svg";

  return (
    <div className={`navbar ${theme}`}>
      <div className="navbar-container">
        <div className="logo-container">
          <Link to="/home" className="logo">
            <img
              src="https://www.iconbolt.com/iconsets/pixelicons-line/soccer.svg"
              alt="football-logo"
            />
          </Link>
          <p className="logo-text">Sve za Fudbal</p>
        </div>
        <div className="navlinks">
          <NavLink to="/home">Početna</NavLink>
          <NavLink to="/about_us">O Nama</NavLink>
          <NavLink to="/find_club">Pronađi klub</NavLink>
          {/* <NavLink to="/you_play">Odigraj termin</NavLink>
          <NavLink to="/leagues">Lige</NavLink>
          <NavLink to="/tournaments">Turniri</NavLink>
          <NavLink to="/camps">Kampovi</NavLink>
          <NavLink to="/individual">Individualni Rad</NavLink> */}
        </div>
        <div className="navbar-buttons">
          <Language />
          <button onClick={toggleTheme} className="theme-button" >
            {theme === "light" ? (
              <img src={lightURLTheme} alt="Sun" />
            ) : (
              <img src={darkURLTheme} alt="Moon" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
