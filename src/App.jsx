import "./style.scss";
import { Link, NavLink } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <main>
        <div className="container">
          <div className="navbar">
            <Link to="/">
              <img
                src="https://www.iconbolt.com/iconsets/hawcons-stroke/soccer-court.svg"
                alt="football-logo"
              />
            </Link>
            <div className="navlinks">
            <NavLink>Početna</NavLink>
              <NavLink>O Nama</NavLink>
              <NavLink>Pronađi klub</NavLink>
              <NavLink>Odigraj termin</NavLink>
              <NavLink>Lige</NavLink>
              <NavLink>Turniri</NavLink>
              <NavLink>Kampovi</NavLink>
              <NavLink>Individualni Rad</NavLink>
            </div>
            <div className="buttons">
              <button>Language</button>
              <button>Theme</button>
            </div>
          </div>
          <main>
            <h1>Fudbalski klubovi i Škole fudbala</h1>
            <p>Najveća ponuda klubova i škola fudbala za sve uzraste. Upišite se još danas i ostvarite popust na prvu članarinu!</p>
            <form className="search-section">
              <input type="text" placeholder="Opština" />
              <input type="text" placeholder="Godište" />
              <input type="text" placeholder="Članarina" />
              <button type="submit">Search</button>
            </form>
          </main>
          <div className="popular">
            <h2>Najpopularniji</h2>
            <div className="popular-container">
              <div className="club1">
              </div>
              <div className="club1">
              </div>
              <div className="club1">
              </div>
              <div className="club1">
              </div>
              <div className="club1">
              </div>
              <div className="club1">
              </div>
              <div className="club1">
              </div>
              <div className="club1">
              </div>
            </div>
            <button className="all">Pogledajte celu ponudu</button>
          </div>
        </div>
      </main>
    </Router>
  );
};

export default App;
