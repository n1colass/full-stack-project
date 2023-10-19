import { useMutation, useQueryClient, useQuery } from 'react-query';
import todoHttp from './todo.services';
import { QUERY_KEYS } from '../common/consts/app-keys.const';
import { ITodo } from '../common/types/todo.types';

export const useTodoMutation = (search?: string | undefined) => {
  const queryClient = useQueryClient();

  const {
    data: todos,
    isLoading,
    isError,
    error
  } = useQuery<ITodo[], Error>(QUERY_KEYS.TODOS, () => todoHttp.getTodos());

  const deleteTodoMutation = useMutation((idTodo: string) => todoHttp.deleteTodo(idTodo), {
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEYS.TODOS);
    }
  });

  const deleteTodo = (id: string) => {
    deleteTodoMutation.mutate(id);
  };

  const createTodoMutation = useMutation(
    (todo: Pick<ITodo, 'title' | 'description'>) => todoHttp.createTodo(todo),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(QUERY_KEYS.TODOS);
      }
    }
  );

  const createTodo = (todo: Pick<ITodo, 'title' | 'description'>) => {
    createTodoMutation.mutate(todo);
  };

  const { refetch: searchTodo } = useQuery(
    [QUERY_KEYS.TODOS, search],
    () => todoHttp.searchTodo(search || ''),
    {
      enabled: false
      /* onSuccess: () => {
        queryClient.invalidateQueries(QUERY_KEYS.TODOS);
      } */
    }
  );
  /* const searchTodo = (todo: Pick<ITodo, 'title'>) => {
    searchTodoMutation.mutate(todo);
  }; */

  const todosQueries = {
    todos,
    isLoading,
    isError,
    error,
    deleteTodo,
    createTodo,
    searchTodo
  };

  return todosQueries;
};
