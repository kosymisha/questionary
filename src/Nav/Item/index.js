import React from "react";
import injectSheet from 'react-jss';

const styles = {
    container: {
        width: "70px",
        margin: "15px"
    }
};

const Item = ({ classes, label }) => {
    return (
        <div className={classes.container}>
            {label}
        </div>
    );
};

export default injectSheet(styles)(Item);