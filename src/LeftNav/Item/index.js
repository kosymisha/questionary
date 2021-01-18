import React from "react";
import injectSheet from 'react-jss';
import { NavLink } from "react-router-dom";

const styles = {
    container: {
        margin: "15px"
    }
};

const Item = ({ classes, label, path }) => {
    return (
        <div className={classes.container}>
            <NavLink to={path} >{label}</NavLink>
        </div>
    );
};

export default injectSheet(styles)(Item);