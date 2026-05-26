import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <NavLink className="brand" to="/" aria-label="NoteMindAI home">
          <div className="logo" aria-hidden="true" />
          <span>NoteMindAI</span>
        </NavLink>

        <nav className="nav-links" aria-label="Primary navigation">
          <NavLink to="/" end>
            Home
          </NavLink>
          <a href="#features">Features</a>
          <a href="#login">Login</a>
          <NavLink className="nav-cta" to="/dashboard">
            Start Studying
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
