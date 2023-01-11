import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./components/model";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todo, settodo] = useState<string>("");
  const [todos, settodos] = useState<Array<Todo>>([]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      settodos([...todos, { id: Date.now(), todo, isDone: false }]);
      settodo("");
    }
    console.log(todos);
  };
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} settodo={settodo} handleSubmit={handleSubmit} />
      <TodoList todos={todos} settodos={settodos} />
    </div>
  );
};

export default App;
