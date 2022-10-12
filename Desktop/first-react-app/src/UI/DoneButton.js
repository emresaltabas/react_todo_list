import React from "react";
import { FaCheck } from "react-icons/fa";
import classes from "./DoneButton.module.css"
const DoneButton=(props)=>{

    

    return(
        
        <FaCheck className={classes.button} onClick={props.onClick} />
    )
}
export default DoneButton