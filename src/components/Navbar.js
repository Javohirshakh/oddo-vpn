import React from 'react';
import { Restore, Home, Settings } from '@mui/icons-material'; // Импортируем иконки Material UI
import './Navbar.css'; // Подключаем стили для навбара

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-item">
        <Restore className="navbar-icon" /> {/* Иконка истории */}
      </div>
      <div className="navbar-item">
        <Home className="navbar-icon" /> {/* Иконка дома */}
      </div>
      <div className="navbar-item">
        <Settings className="navbar-icon" /> {/* Иконка настроек */}
      </div>
    </div>
  );
};

export default Navbar;
