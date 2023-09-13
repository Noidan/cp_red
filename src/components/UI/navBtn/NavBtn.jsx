import React from "react";
import classes from './NavBtn.module.css';
import { NavLink } from "react-router-dom";

const NavBtn = ({ children, to, ...props }) => {
  

    return (
        <NavLink
            to={to}
            className={({ isActive }) => isActive ? classes.activeBtn : classes.unactiveBtn}
            {...props}
        >
            {children}
        </NavLink>
    )
}

export default NavBtn

// color: #01171C;
// background: #FFFD0B;