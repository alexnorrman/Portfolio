import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Nav.css';

const Nav = () => (

    <nav className="nav">
        <div id="nav-logo">
            <Link to="/">
                <h4>Alex Norrman</h4>
            </Link>
        </div>
        <ul className="nav-links">
            <Link smooth  to="/#projects">
                <li>Projects</li>
            </Link>
            <Link to="/about">
                <li>About</li>
            </Link>
        </ul>
    </nav>
);

export default Nav;