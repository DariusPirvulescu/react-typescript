import React, { useRef } from 'react';
import ToDoList from "./components/ToDoList";
import AddToDo from "./components/AddToDo";

const App: React.FC = () => {
  const todo = [{id: "1", task: "Learn React-TS"}]
  const inputRef = useRef<HTMLInputElement>(null)


  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();

    const inputTask = inputRef.current!.value
    console.log(inputTask)
  }

  return (
    <div className="App">
      <AddToDo submit={handleSubmit} refer={inputRef} />
      <ToDoList items={todo}/>
    </div>
  );
}

export default App;
