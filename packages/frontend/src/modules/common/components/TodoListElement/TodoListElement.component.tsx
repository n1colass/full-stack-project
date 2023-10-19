import React from 'react';
import { useTodoMutation } from '../../../services/todo.mutation';
import { ITodo } from '../../types/todo.types';
import { TodoElement } from '../TodoElement';
import { TodoListStyled } from './TodoListElement.styled';

export const TodoListElement = () => {
  const { todos } = useTodoMutation();
  return (
    <TodoListStyled>
      {todos ? (
        todos.map((el: ITodo) => <TodoElement key={el._id} isHead={false} {...el} />)
      ) : (
        <div>Something gone wrong</div>
      )}
    </TodoListStyled>
  );
};
