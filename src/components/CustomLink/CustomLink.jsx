import React from 'react';
import { NavLink } from 'react-router-dom';
import './CustomLink.css'

const CustomLink = ({to, children}) => {
    return (
        <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "active"
            : ""
        }
        >
            {children}
        </NavLink>
    );
};

export default CustomLink;  