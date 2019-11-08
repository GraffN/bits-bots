import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
        <ul>
          <Link>
            <li>Home</li>
          </Link>
          <Link>
            <li>Shop</li>
          </Link>
        </ul>
    </nav>
  );
}

export default Navigation;
