import React from "react";
import Item from "./Item";
import injectSheet from 'react-jss';

const styles = {
    container: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "50px",
        justifyContent: "space-between",
        background: "dimgray",
        color: "white",
        alignItems: "center",
        position: "sticky",
        top: "0",
        zIndex: "1"
    },
    items: {
        display: "flex",
        flexDirection: "row",
        marginRight: "30px"
    },
    logo: {
        fontStyle: "italic",
        fontSize: "25px",
        width: "250px",
        textAlign: "center"
    }
};

const Nav = ({ classes }) => {
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

export default injectSheet(styles)(Nav);