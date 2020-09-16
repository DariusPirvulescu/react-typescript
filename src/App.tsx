import React, { useState } from 'react';
import ToDoList from "./components/ToDoList";
import AddToDo from "./components/AddToDo";
import { ToDo } from "./todo.model";

const App: React.FC = () => {
  const [ todos, setTodos ] = useState<ToDo[]>([{ id: "1", task: "Learn React with TS" }])
  
  
  const getInputText = (text: string) => {
    console.log(text)
    setTodos(prevTodos => [
      ...prevTodos, 
      {id: Math.random().toString(), task: text}
    ])
  }

  return (
    <div className="App">
      <AddToDo submit={getInputText} />
      <ToDoList items={todos}/>
    </div>
  );
}

export default App;
