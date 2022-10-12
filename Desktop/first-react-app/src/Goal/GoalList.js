import React from "react";
import GoalItem from "./GoalItem";
import classes from "./GoalList.module.css";
import Card from "../UI/Card";

const GoalList = (props) => {
  return (
    <Card className={classes.goal}>
      <ul>
        {props.list.map((goal) => (
          <GoalItem 
                    key={goal.id}   
                    goal={goal} 
                    onDeleteItem={props.onDeleteItem}/>
        ))}
      </ul>
    </Card>
  );
};

export default GoalList;
