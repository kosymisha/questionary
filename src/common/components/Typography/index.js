import React from "react";
import injectSheet from 'react-jss';
import cn from "classnames";

const styles = {
    h1: {
        fontSize: "6rem",
    },
    h2: {
        fontSize: "3.75rem",
    },
    h3: {
        fontSize: "3rem",
    },
    h4: {
        fontSize: "2.125rem",
    },
    h5: {
        fontSize: "1.5rem",
    },
    h6: {
        fontSize: "1.25rem"
    },
    inlineBlock: {
        display: "inline-block"
    }
};

const variantsMapping = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6"
};

const Typography = ({classes, color, variant, isInlineBlock = false, children, ...props}) => {

    const Component = variant
        ? (!!variantsMapping[variant] ? variantsMapping[variant] : "p")
        : "p";

    return <Component className={cn(
        `${classes[variant]} ${isInlineBlock ? classes.inlineBlock : ""}`
    )} {...props}>
        {children}
    </Component>
};

export default injectSheet(styles)(Typography);