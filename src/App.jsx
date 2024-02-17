import "./style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

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
  return (
    <Router>
      <main>
        <div className="container">
          <Navbar />
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/find_club" element={<FindClub />} />
            <Route path="/you_play" element={<YouPlay />} />
            <Route path="/leagues" element={<Leagues />} />
            <Route path="/tournaments" element={<Tournaments />} />
            <Route path="/camps" element={<Camps />} />
            <Route path="/camps" element={<Individual />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
};

export default App;
