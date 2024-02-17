import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/home">
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
      <div className="buttons">
        <button>Language</button>
        <button>Theme</button>
      </div>
    </div>
  );
};

export default Navbar;
