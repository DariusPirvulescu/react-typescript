import React, { useRef } from "react";

import "./AddToDo.css";

interface AddToDoProps {
  submit: (text: string) => void;
}

const AddToDo: React.FC<AddToDoProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();

    const inputTask = inputRef.current!.value;
    if (inputTask.length > 0) {
      props.submit(inputTask);
    } else {
      alert("Task input cannot be empty");
    }
    inputRef.current!.value = "";
    // return;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="todo-inp">Task</label>
        <input type="text" id="todo-inp" ref={inputRef} />
      </div>
      <button type="submit">Add ToDo</button>
    </form>
  );
};

export default AddToDo;
