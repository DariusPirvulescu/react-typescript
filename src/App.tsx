import React, { useState } from "react";
import ToDoList from "./components/ToDoList";
import AddToDo from "./components/AddToDo";
import { ToDo } from "./todo.model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<ToDo[]>([
    { id: "1", task: "Learn React with TS" },
  ]);

  const deleteToDo = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const getInputText = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), task: text },
    ]);
  };

  return (
    <div className="App">
      <AddToDo submit={getInputText} />
      <ToDoList items={todos} handleDelete={deleteToDo} />
    </div>
  );
};

export default App;
