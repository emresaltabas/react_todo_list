import DoneButton from "../UI/DoneButton";
import DeleteButton from "../UI/DeleteButton";
import { useState } from "react";
import React from "react";
import classes from "./GoalItem.module.css"

const GoalItem = (props) => {
    const [isValid, setIsvalid] = useState(true);
    
    const itemDone = () => {
      setIsvalid(!isValid);
    };

//const id=props.goal.id;

  return (
    <li  id={props.goal.id} 
        className={!isValid ?  classes.checked : ""}>
      {props.goal.text}
      <DoneButton onClick={itemDone} />
      <DeleteButton onDeleteItem={()=>props.onDeleteItem(props.goal.id)} />
    </li>
  );
};
export default GoalItem;
