import React from 'react';
import { TodoContainerStyled } from './TodoContainer.styled';
import { TodoElement } from '../TodoElement';
import { TodoListElement } from '../TodoListElement';
import { TodoAddElement } from '../TodoElementAdd';

export const TodoContainer = () => (
  <TodoContainerStyled>
    <TodoElement isHead title="Title" _id="none" description="Description" action="Action" />
    <TodoAddElement />
    <TodoListElement />
  </TodoContainerStyled>
);
