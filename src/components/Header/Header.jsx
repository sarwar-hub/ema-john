import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='nav-bar'>
            <img src={logo} alt="site-logo" />
            <nav className='menu'>
                <Link to="/order">My Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/cart">Cart</Link>
                <Link className='login-button' to="/login">Login</Link>
            </nav>
        </div>
    );
};

export default Header;