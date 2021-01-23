import React, { useState } from "react";
import styled from "styled-components";
import { FaSave } from "react-icons/fa";

const ToDoInsertBlock = styled.form`
  border-bottom: 3px solid #bc444c;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  flex: 1;
  background: none;
  border: none;
  outline: none;
  padding: 10px;
  font-size: 1rem;
  &::placeholder {
    font-size: 1.5rem;
    color: #bc444c;
    font-weight: 700;
    text-align: center;
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  svg {
    font-size: 2rem;
    color: #bc444c;
  }
`;

const ToDoInsert = ({ onInsert }) => {
  const [input, setInput] = useState("");

  const onChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  const onSubmit = (e) => {
    onInsert(input);
    setInput("");
    e.preventDefault();
  };

  return (
    <ToDoInsertBlock onSubmit={onSubmit}>
      <Input
        placeholder="Contents"
        onChange={onChange}
        alt="할 일을 입력해주세요"
        value={input}
      ></Input>
      <Button type="submit">
        <FaSave />
      </Button>
    </ToDoInsertBlock>
  );
};

export default ToDoInsert;
