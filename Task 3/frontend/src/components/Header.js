import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>
          <Link to="/" className="logo">Posts App</Link>
        </h1>
        <nav>
          <Link to="/" className="nav-link">All Posts</Link>
          <Link to="/create" className="nav-link create-btn">Create Post</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
