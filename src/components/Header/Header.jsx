import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='nav-bar'>
            <Link to="/"><img src={logo} alt="site-logo" /></Link>
            <nav className='menu'>
                <Link to="/shop">Shop</Link>
                <Link to="/order">My Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/cart">Cart</Link>
                <Link className='login-button' to="/login">Login</Link>
            </nav>
        </div>
    );
};

export default Header;