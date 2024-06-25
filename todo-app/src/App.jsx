import React from "react";
import Todo from "./components/Todo";
import { Provider } from "react-redux";
import { store } from "./app/store";
import AddTodo from "./components/AddTodo";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <AddTodo />
        <Todo />
      </Provider>
    </>
  );
};

export default App;
