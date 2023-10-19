import * as yup from 'yup';

export const newTodoSchema = yup.object({
  title: yup
    .string()
    .min(1, 'Title should be of minimum 1 characters length')
    .max(32, 'Title should be of maximum 32 characters length')
    .required('Title is required'),
  description: yup
    .string()
    .min(1, 'Description should be of minimum 1 characters length')
    .max(128, 'Description should be of maximum 128 characters length')
    .required('Description is required')
});
