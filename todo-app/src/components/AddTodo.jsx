import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../todo/todoSlice";

const AddTodo = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo(task));
    setTask("");
  };

  return (
    <>
      <h3>Add Task :</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(event) => setTask(event.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default AddTodo;
