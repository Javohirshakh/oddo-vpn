import './reset.css'; // Сброс стилей
import './App.css'; // Твои основные стили
import React, { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="app-container">
      {/* Основное содержимое */}
      <div className={`main-content ${showSplash ? 'hidden' : ''}`}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Navbar />
      </div>

      {/* Сплэш-скрин */}
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
    </div>
  );
};

export default App;
