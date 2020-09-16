import React from "react";
import "./ToDoList.css";


interface ToDoListProps {
  items: {id: string, task: string}[],
  handleDelete: (todoId: string) => void
}

const ToDoList: React.FC<ToDoListProps> = (props) => {
  return <ul>
    {props.items.map(item => {
      return <li id={item.id}>
        <span>{item.task}</span>
        <button onClick={props.handleDelete.bind(null, item.id)} >DELETE</button>
        </li>
    })}
  </ul>
}

export default ToDoList;