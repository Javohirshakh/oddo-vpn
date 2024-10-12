import React, { useState } from 'react';
import { Restore, Home, Settings } from '@mui/icons-material';
import { Link } from 'react-router-dom'; // Импортируем Link
import './Navbar.css'; // Стили

const Navbar = () => {
  const [active, setActive] = useState('home');

  return (
    <div className="navbar-underline">
      <Link
        to="/history"
        className={`navbar-item ${active === 'history' ? 'active' : ''}`}
        onClick={() => setActive('history')}
      >
        <Restore className="navbar-icon" />
      </Link>
      <Link
        to="/home"
        className={`navbar-item ${active === 'home' ? 'active' : ''}`}
        onClick={() => setActive('home')}
      >
        <Home className="navbar-icon" />
      </Link>
      <Link
        to="/settings"
        className={`navbar-item ${active === 'settings' ? 'active' : ''}`}
        onClick={() => setActive('settings')}
      >
        <Settings className="navbar-icon" />
      </Link>
    </div>
  );
};

export default Navbar;
