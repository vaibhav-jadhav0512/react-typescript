import React, { useRef } from "react";
import "./styles.css";

interface Props {
  todo: string;
  settodo: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
}
const InputField: React.FC<Props> = ({ todo, settodo, handleSubmit }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleSubmit(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter a task"
        className="input__box"
        value={todo}
        onChange={(e) => settodo(e.target.value)}
      />
      <button className="input_submit" type="submit">
        GO
      </button>
    </form>
  );
};

export default InputField;
