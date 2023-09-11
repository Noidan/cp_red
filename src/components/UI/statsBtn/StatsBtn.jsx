import React from "react";
import classes from './StatsBtn.module.css';

const StatsBtn = ({ children, ...props }) => {
    return <button {...props} className={classes.StatsBtn}>
        {children}
    </button>
}

export default StatsBtn