import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { Authentication } from '../../context/AuthContext';

const Header = () => {
    const {user, logOut} = useContext(Authentication);

    const handleLogout = async() => {
        await logOut();
    }

    return (
        <div className='nav-bar'>
            <Link to="/"><img src={logo} alt="site-logo" /></Link>
            <nav className='menu'>
                <Link to="/shop">Shop</Link>
                <Link to="/order">My Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/cart">Cart Overview</Link>
                {!user
                ?
                <Link className='login-button' to="/login">Login</Link>
                :
                <Link onClick={handleLogout} className='login-button' to="/login">Log out</Link>
                }
            </nav>
        </div>
    );
};

export default Header;