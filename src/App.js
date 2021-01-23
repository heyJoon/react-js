import { useImperativeHandle, useRef, useState } from "react";
import ToDoInsert from "./ToDoInsert";
import ToDoList from "./ToDoList";
import ToDoTemplate from "./ToDoTemplate";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      data: "리액트 초급 배우기",
      checked: true,
    },
    {
      id: 2,
      data: "리액트 중급 배우기",
      checked: true,
    },
    {
      id: 3,
      data: "리액트 고급 배우기",
      checked: false,
    },
  ]);

  let newId = useRef(4);

  const onInsert = (input) => {
    const newTodos = todos.concat({
      id: newId.current,
      data: input,
      checked: false,
    });
    newId.current++;
    setTodos(newTodos);
  };

  const onToggle = () => {};

  const onRemove = (id) => {
    const removedTodos = todos.filter((item) => item.id !== id);
    newId.current--;
    setTodos(removedTodos);
  };

  return (
    <>
      <ToDoTemplate>
        <ToDoInsert onInsert={onInsert}></ToDoInsert>
        <ToDoList
          todos={todos}
          onToggle={onToggle}
          onRemove={onRemove}
        ></ToDoList>
      </ToDoTemplate>
    </>
  );
}

export default App;
