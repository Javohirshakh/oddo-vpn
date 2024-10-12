import './reset.css'; // Сброс стилей
import './App.css'; // Твои основные стили
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <Router>
      <div className="app-container">
        {/* Сплэш-скрин, который скрывает основное содержимое в начале */}
        {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}

        {/* Основное содержимое */}
        <div className={`main-content`}>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

const HomePage = () => <div>Home Page Content</div>;
const HistoryPage = () => <div>History Page Content</div>;
const SettingsPage = () => <div>Settings Page Content</div>;

export default App;
