import React from 'react';
import styled from 'styled-components';

const ToDoTemplateBlock = styled.div`
    margin: 6rem auto 0 auto;
    width: 500px;
    border: 3px solid #BC444C;
    border-radius: 10px;
    background-color: #FDE7DC;
`;

const ToDoContainer = styled.div`
    border-bottom: 3px solid #BC444C;
    display: flex;
    justify-content: center;
    padding: 30px;
`;

const ToDoTitle = styled.div`
    text-align:center;
    border: 3px solid #BC444C;
    transform: rotate(-7deg);
    padding: 5px;
    background-color: white;
    font-size: 2.5rem;
    font-weight: 900;
    color: #BC444C;
    width: 60%;
`;

const ToDoContent = styled.div`
    /* border: 3px solid #BC444C; */
`;

const ToDoTemplate = ({children}) => {
    return (
        <ToDoTemplateBlock>
            <ToDoContainer>
                <ToDoTitle>To Do List</ToDoTitle>
            </ToDoContainer>
            <ToDoContent>{children}</ToDoContent>
        </ToDoTemplateBlock>
    );
};

export default ToDoTemplate;