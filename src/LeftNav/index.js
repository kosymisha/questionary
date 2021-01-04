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
            <Item label="Create New Poll"/>
            <Item label="Your Polls"/>
            <Item label="Your Polls"/>
            <Item label="Your Polls"/>
        </div>
    );
};

export default injectSheet(styles)(LeftNav);