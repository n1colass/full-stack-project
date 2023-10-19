import { ILike } from 'typeorm';
import { Todo } from '../entities/Todo';
import { ITodo } from '../types/todos.type';

export default class TodoService {
  async findAll(): Promise<Todo[]> {
    const allTodos = await Todo.find();
    return allTodos;
  }

  async findById(id: number) {
    const res = await Todo.findOne({ where: { _id: id } });
    return res;
  }

  async findByTitle(title: string): Promise<Todo[]> {
    const todosByTitle = await Todo.find({
      where: {
        title: ILike(`%${title}%`)
      }
    });
    return todosByTitle;
  }

  async createTodo(todo: Todo) {
    const addTodo = Todo.create(todo);
    const res = await Todo.save(addTodo);
    return res;
  }

  async updateTodo(id: number, newTodo: Partial<ITodo>) {
    await Todo.update(id, newTodo);
    const updatedTodo = await Todo.findOneBy({ _id: id });
    return updatedTodo;
  }

  async deleteTodo(id: number) {
    const res = await Todo.delete(id);
    return res;
  }
}
