import React from 'react';
import styled from 'styled-components';
import ToDoItems from './ToDoItems';

const ToDoListBlock = styled.div`
`;

const ToDoList = ({todos, onToggle, onRemove}) => {
    return (
        <ToDoListBlock>
            {todos.map(todo => <ToDoItems key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove}></ToDoItems>)}
        </ToDoListBlock>
    );
};

export default ToDoList;