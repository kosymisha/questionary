import React from "react";
import Button from "../../../common/components/Button";
import TextField from "../../../common/components/TextField";
import injectSheet from 'react-jss';
import Typography from "../../../common/components/Typography";

const styles = {
    title: {
        display: "inline-block"
    },
    buttonsRow: {
        padding: "30px",
        background: "grey"
    }
};

const NewSurvey = ({ classes }) => {

    const onAddElementClick = () => {
        console.log("click");
    };

    const onChangeTitle = ({ target }) => {
        //console.log(target.value);
    };

    return (
        <div>
            <div className={classes.title}>
                <Typography variant="h6" isInlineBlock>{"New Survey: "}</Typography>
                <TextField onChange={onChangeTitle} placeholder={"Search"}/>
            </div>
            <div className={classes.buttonsRow}>
                <Button label={"Add Element"} onClick={onAddElementClick}/>
            </div>
        </div>
    );
};

export default injectSheet(styles)(NewSurvey);