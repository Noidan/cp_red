import React from "react";
import classes from './NavBtn.module.css';

const NavBtn = ({ children, ...props }) => {
    return <button {...props} className={classes.NavBtn}>
        {children}
    </button>
}

export default NavBtn