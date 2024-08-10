import React from 'react';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const nav = useNavigate();
    return (
        <nav className="home-navbar">
            <div className="home-logo">AgroPlus</div>
            <ul className="home-nav-links">
                <li><div href="#">Home</div></li>
                <li><div href="#">News & Articles</div></li>
                <li><div href="#">About Us</div></li>
                <li><div onClick={() => nav('/register')}>Sign Up</div></li>
                <li><div onClick={() => nav('/login')}>Login</div></li>
            </ul>
        </nav>
    );
};

export default Header;
