import React from "react";
import styled from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiFillCheckSquare } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";

const ToDoItemsBlock = styled.div`
  display: flex;
  align-items: center;
  svg {
    font-size: 2rem;
    color: #bc444c;
  }
`;

const Text = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  font-size: 1.2rem;
  color: #bc444c;
  font-weight: 600;

  svg {
    cursor: pointer;
  }

  span {
    padding-left: 1rem;
  }

  &.checked {
    text-decoration: line-through;
    color: grey;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  svg {
    cursor: pointer;
  }
`;

const ToDoItems = ({ todo, onToggle, onRemove }) => {
  const { id, data, checked } = todo;

  return (
    <ToDoItemsBlock>
      <Text className={checked ? "checked" : ""}>
        {checked ? <AiFillCheckSquare /> : <AiOutlineCheckCircle />}
        <span>{data}</span>
      </Text>
      <Icons>
        <AiFillCloseCircle onClick={() => onRemove(id)} />
      </Icons>
    </ToDoItemsBlock>
  );
};

export default ToDoItems;
