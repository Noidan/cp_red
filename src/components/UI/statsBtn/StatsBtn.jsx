import React from "react";
import classes from './StatsBtn.module.css';
import { NavLink } from "react-router-dom";
import { chars } from "../../../bd/chars";

const StatsBtn = ({ children, stat, ...props }) => {

    return (
        <NavLink
            to={'/stats/' + stat}
            className={({ isActive }) => isActive ? classes.activeBtn : classes.unactiveBtn}
            {...props}
        >
            {stat.toUpperCase()}
            {/* chars[0].stat */}
        </NavLink>
    )
}

export default StatsBtn