import React from 'react';
import { Button } from '@mui/material';
import { useFormik } from 'formik';
import { useTodoMutation } from '../../../services/todo.mutation';
import {
  TodoElementAddStyled,
  TodoAddButton,
  TodoAddDescription,
  TodoAddTitle,
  TodoAddForm
} from './TodoElementAdd.styled';
import { newTodoSchema } from '../../validation/newTodoSchema';
import { IValuesForm } from './TodoElementAdd.interfaces';

export const TodoAddElement = () => {
  const [active, setActive] = React.useState(false);
  const { createTodo } = useTodoMutation();
  const handleSubmit = async (values: IValuesForm) => {
    createTodo(values);
    setActive(!active);
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      isComplete: false,
      isPrivate: false
    },
    validationSchema: newTodoSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    }
  });

  return (
    <TodoElementAddStyled>
      <TodoAddButton onClick={() => setActive(!active)}>Add new todo</TodoAddButton>
      {active && (
        <TodoAddForm onSubmit={formik.handleSubmit}>
          <TodoAddTitle
            id="title"
            name="title"
            variant="outlined"
            autoComplete="off"
            label="Title"
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />
          <TodoAddDescription
            id="description"
            name="description"
            variant="outlined"
            autoComplete="off"
            label="Description"
            value={formik.values.description}
            onChange={formik.handleChange}
            error={formik.touched.description && Boolean(formik.errors.description)}
            helperText={formik.touched.description && formik.errors.description}
          />
          <Button variant="contained" color="success" sx={{ margin: 'auto 0' }} type="submit">
            Submit
          </Button>
        </TodoAddForm>
      )}
    </TodoElementAddStyled>
  );
};
