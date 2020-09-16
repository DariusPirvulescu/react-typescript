import React from "react";

interface ToDoListProps {
  items: {id: string, task: string}[]
}

const ToDoList: React.FC<ToDoListProps> = (props) => {
  return <ul>
    {props.items.map(item => {
      return <li id={item.id} >{item.task}</li>
    })}
  </ul>
}

export default ToDoList;