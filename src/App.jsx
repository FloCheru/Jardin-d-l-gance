import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Realisations from "./pages/Realisations";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <nav className="flex gap-6 p-4 bg-green-900 text-white">
        <Link to="/">Accueil</Link>
        <Link to="/services">Services</Link>
        <Link to="/realisations">Réalisations</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
