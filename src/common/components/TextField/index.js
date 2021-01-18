import React from "react";
import injectSheet from 'react-jss';

const styles = {

};

const TextField = ({
                       placeholder,
                       onChange
                   }) => {
    return (
        <input
            onChange={onChange}
            placeholder={placeholder}
        />
    );
};

export default injectSheet(styles)(TextField);