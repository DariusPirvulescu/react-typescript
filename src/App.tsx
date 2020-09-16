import React from 'react';
import ToDoList from "./components/ToDoList";
import AddToDo from "./components/AddToDo";

const App: React.FC = () => {
  const todo = [{id: "1", task: "Learn React-TS"}]

  return (
    <div className="App">
      <AddToDo />
      <ToDoList items={todo}/>
    </div>
  );
}

export default App;
