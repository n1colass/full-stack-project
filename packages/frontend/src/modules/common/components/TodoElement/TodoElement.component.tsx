import React from 'react';
import { Button } from '@mui/material';
import { useTodoMutation } from '../../../services/todo.mutation';
import {
  TodoElementStyled,
  TodoElementTitle,
  TodoElementActions,
  TodoElementDescription
} from './TodoElement.styled';
import { ITodoElement } from './TodoElement.interfaces';

export const TodoElement = ({ isHead, title, description, action, _id }: ITodoElement) => {
  const { deleteTodo } = useTodoMutation();
  return (
    <TodoElementStyled isHead={isHead}>
      <TodoElementTitle>{title}</TodoElementTitle>
      <TodoElementDescription>{description}</TodoElementDescription>
      <TodoElementActions>
        {action ? (
          `${action}`
        ) : (
          <>
            <Button variant="contained" color="info">
              View
            </Button>
            <Button variant="contained" color="error" onClick={() => deleteTodo(_id)}>
              Delete
            </Button>
          </>
        )}
      </TodoElementActions>
    </TodoElementStyled>
  );
};
