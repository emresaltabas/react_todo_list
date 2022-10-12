import React from "react";
import GoalInput from "./Goal/GoalInput";
import GoalList from "./Goal/GoalList";
import { useState } from "react";

const App = () => {
  const [goals, setNewGoal] = useState([]);

  const newGoalToBox = (goal) => {
    setNewGoal((prevGoal) => {
      return [
        { text: goal, complete: false, id: Math.random().toString() },
        ...prevGoal,
      ];
    });
    console.log(goals);
  };

  const deleteItemHandler = (goalId) => {
    setNewGoal((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;

    });
  };

  return (
    <div>
      <GoalInput goalBox={newGoalToBox} />
      <GoalList list={goals} onDeleteItem={deleteItemHandler} />
    </div>
  );
};
export default App;
