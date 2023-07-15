import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Quiz from './components/Quiz';
import ArrayMethodsPage from './pages/ArrayMethodsPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/arrayMethods" element={<ArrayMethodsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
