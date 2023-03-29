import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <div className='nav-bar'>
            <img src={logo} alt="site-logo" />
            <nav className='menu'>
                <a href="/order">My Orders</a><a href="/inventory">Inventory</a><a href="/cart">Cart</a><a className='login-button' href="/login">Login</a>
            </nav>
        </div>
    );
};

export default Header;