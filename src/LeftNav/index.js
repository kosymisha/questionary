import React from "react";
import Item from "./Item";
import injectSheet from 'react-jss';

const styles = {
    container: {
        position: "sticky",
        top: "50px",
        background: "darkgray",
        color: "white",
        width: "250px",
        height: "fit-content",
    }
};

const LeftNav = ({ classes }) => {
    return (
        <div className={classes.container}>
            <Item path="/new-survey" label="New Survey"/>
            <Item path="/settings" label="My surveys"/>
            <Item path="/" label="Survey templates"/>
            <Item path="/" label="Users"/>
        </div>
    );
};

export default injectSheet(styles)(LeftNav);