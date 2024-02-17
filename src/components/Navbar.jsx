import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/home" className="logo">
          <img
            src="https://www.iconbolt.com/iconsets/hawcons-stroke/soccer-court.svg"
            alt="football-logo"
          />
        </Link>
        <div className="navlinks">
          <NavLink to="/home">Početna</NavLink>
          <NavLink to="/about_us">O Nama</NavLink>
          <NavLink to="/find_club">Pronađi klub</NavLink>
          <NavLink to="/you_play">Odigraj termin</NavLink>
          <NavLink to="/leagues">Lige</NavLink>
          <NavLink to="/tournaments">Turniri</NavLink>
          <NavLink to="/camps">Kampovi</NavLink>
          <NavLink to="/individual">Individualni Rad</NavLink>
        </div>
        <div className="navbar-buttons">
          <button className="language-button">
            <img src="https://www.iconbolt.com/iconsets/iconoir/language.svg" alt="language" />
          </button>
          <button className="theme-toggle">
            <img src="https://www.iconbolt.com/iconsets/iconoir/sun-light.svg" alt="theme" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
