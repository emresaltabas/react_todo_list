import React from "react";
import { FaTimes } from "react-icons/fa";
import classes from "./DeleteButton.module.css"
const DeleteButton=(props)=>{
    return(
        <FaTimes className={classes.button} onClick={props.onDeleteItem}/>
    )
}

export default DeleteButton