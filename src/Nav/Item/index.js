import React from "react";
import classes from "./index.module.css"

const Item = ({ label }) => {
    return (
        <div className={classes.container}>
            {label}
        </div>
    );
};

export default Item;