import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../todo/todoSlice";

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      <h3>Todo Lists :</h3>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            <p>{todo.task}</p>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Todo;
