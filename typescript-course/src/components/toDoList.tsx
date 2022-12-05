import React from "react";
import { Todo } from "../model";
import SingleTodo from "./singleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ToDoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {todos.map((x) => (
        <SingleTodo todo={x} key={x.id} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
};

export default ToDoList;
