import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home">
      <h1>Welcome to Array Quiz!</h1>
      <p>Test your knowledge of JavaScript array methods.</p>
      <Link to="/quiz" className="start-button">
        Start Quiz
      </Link>
    </div>
  );
}

export default HomePage;
