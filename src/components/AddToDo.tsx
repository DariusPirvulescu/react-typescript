import React, { useRef } from "react";

interface AddToDoProps {
  submit: (text: string) => void
}

const AddToDo: React.FC<AddToDoProps> = props => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();

    const inputTask = inputRef.current!.value
    props.submit(inputTask)
    // return;
  }

  return <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="todo-inp">Task</label>
      <input type="text" id="todo-inp" ref={inputRef}/>
    </div>
    <button type="submit">Add ToDo</button>
  </form>
}

export default AddToDo;