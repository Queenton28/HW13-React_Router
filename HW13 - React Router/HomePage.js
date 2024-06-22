import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Book App</h1>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/books">View Books</Link>
    </div>
  );
}

export default HomePage;
