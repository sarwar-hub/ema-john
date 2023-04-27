import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { Authentication } from '../../context/AuthContext';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    const {user, logOut} = useContext(Authentication);

    const handleLogout = async() => {
        await logOut();
    }

    return (
        <div className='nav-bar'>
            <Link to="/"><img src={logo} alt="site-logo" /></Link>
            <nav className='menu'>
                <CustomLink to="/shop">Shop</CustomLink>
                <CustomLink to="/orders">My Orders</CustomLink>
                <CustomLink to="/inventory">Inventory</CustomLink>
                <CustomLink to="/cart">Cart Overview</CustomLink>
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