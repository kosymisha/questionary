import React from "react";
import classes from "./index.module.css"
import Item from "./Item";

const Nav = () => {
    return (
        <div className={classes.container}>
            <div className={classes.logo}>QuestionProject</div>
            <div className={classes.items}>
                <Item label="About"/>
                <Item label="Profile"/>
            </div>
        </div>
    );
};

export default Nav;