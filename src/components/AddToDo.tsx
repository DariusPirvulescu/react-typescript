import React, { FormEventHandler } from "react";

interface AddToDoProps {
  submit: FormEventHandler,
  refer: React.RefObject<HTMLInputElement>
}

const AddToDo: React.FC<AddToDoProps> = (props) => {
  // const inputRef = useRef<HTMLInputElement>(null)

  // const handleSubmit = (evt: React.FormEvent) => {
  //   evt.preventDefault();

  //   const inputTask = inputRef.current!.value
  //   console.log(inputTask)
  //   return;
  // }

  return <form onSubmit={props.submit}>
    <div>
      <label htmlFor="todo-inp">Task</label>
      <input type="text" id="todo-inp" ref={props.refer}/>
    </div>
    <button type="submit">Add ToDo</button>
  </form>
}

export default AddToDo;