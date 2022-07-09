import React from 'react';
import { Link } from 'react-router-dom';
export default function NavBar() {
    return (
        <nav>
            <ul>
            <Link to="/">
                <li>
                    Home
                </li>
            </Link>
            <Link to="/pages/about">
                <li>
                    About
                </li>
            </Link>
            <Link to="/pages/contact">
                <li>
                    Contact
                </li>
            </Link>
            </ul>
        </nav>
        
    );
}