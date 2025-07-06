import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Save theme preference in localStorage
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') setDarkMode(true);
  }, []);

  useEffect(() => {
    document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <nav className="navbar sticky-top navbar-light bg-white shadow-sm px-3">
      <div className="container-fluid justify-content-between align-items-center">
        <h4 className="fw-bold mb-0">Ilav Lunde</h4>
        <div className="d-flex align-items-center">
          {['Home', 'About', 'Projects', 'Contact'].map((section) => (
            <Link
              key={section}
              to={section.toLowerCase()}
              smooth={true}
              duration={500}
              className="mx-2 nav-link d-inline"
              style={{ cursor: 'pointer' }}
            >
              {section}
            </Link>
          ))}
          {/* <button
            onClick={() => setDarkMode(!darkMode)}
            className="btn btn-outline-secondary btn-sm ms-3"
            title="Toggle dark mode"
          >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
