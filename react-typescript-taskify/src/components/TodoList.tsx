import React from "react";
import "./styles.css";
import { Todo } from "./model";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Array<Todo>;
  settodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}

const TodoList: React.FC<Props> = ({ todos, settodos }) => {
  return (
    <div className="todos">
      {todos.map((t) => (
        <SingleTodo todo={t} key={t.id} todos={todos} settodos={settodos} />
      ))}
    </div>
  );
};

export default TodoList;
