import React from "react";
import classes from "./index.module.css";
import Item from "./Item";

const LeftNav = () => {
    return (
        <div className={classes.container}>
            <Item label="Create New Poll"/>
            <Item label="Your Polls"/>
            <Item label="Your Polls"/>
            <Item label="Your Polls"/>
        </div>
    );
};

export default LeftNav;