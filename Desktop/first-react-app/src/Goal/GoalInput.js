import React from "react";
import { useState } from "react";
import classes from "./GoalInput.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GoalInput = (props) => {

  const [inputText, setNewInputText] = useState("");
  const showToastMessage = () => {
    toast.warning("You should write something !", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1000,
    });
  };

  const onChangeHandler = (event) => {
    setNewInputText(event.target.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (inputText.trim().length === 0) {
      setNewInputText("");
      showToastMessage();
      return;
    }
    props.goalBox(inputText.trim());
    console.log(inputText);
    setNewInputText("");
  };

  return (
    //<div>Allah'ım yardımını esirgeme.</div>

    <Card className={classes.input}>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="todo">Add a new task</label>
        <input
          type="text"
          id="todo"
          onChange={onChangeHandler}
          value={inputText}
        />
        <Button type="submit">Submit</Button>
      </form>
      <ToastContainer />
    </Card>
  );
};
export default GoalInput;
