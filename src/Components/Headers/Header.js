import React from 'react';
import logo from "../../images/Logo.svg"
import './Headers.css'

const Header = () => {
    return (
        <nav className='nav-container'>
            <img src={logo} alt="" />
            <div>
                <a href="/home">Home</a>
                <a href="/order">Order</a>
                <a href="/order_preview">Order Preview</a>
                <a href="/login">LogIn</a>
            </div>
        </nav>
    );
};

export default Header;