import { Response, Request, NextFunction } from 'express';
import TodoService from '../services/todo.service';
import { IRequestId } from '../types/todos.type';
import { Todo } from '../entities/Todo';

export class TodoController {
  constructor(private todoService: TodoService) {
    this.isExistTodo = this.isExistTodo.bind(this);
  }

  async getAllTodo() {
    const todos = await this.todoService.findAll();
    return todos;
  }

  async getById(req: IRequestId) {
    const id = Number(req.params.id);
    const todos = await this.todoService.findById(id);
    return todos;
  }

  async getTodoByTitle(req: Request<any, any, any, { title?: string }>) {
    const { title } = req.query;
    const todos = await this.todoService.findByTitle(title as string);
    return todos;
  }

  async createTodo(req: Request<any, Todo, Todo>) {
    const data = req.body;
    const todo = await this.todoService.createTodo(data);
    return todo;
  }

  async updateTodo(req: Request<{ id?: string }, Todo, Todo>) {
    const id = Number(req.params.id);
    const newTodo = req.body;
    const todo = await this.todoService.updateTodo(id, newTodo);
    return todo;
  }

  async deleteTodo(req: IRequestId) {
    const id = Number(req.params.id);
    const todos = await this.todoService.deleteTodo(id);
    return todos;
  }

  async isExistTodo(req: IRequestId, res: Response, next: NextFunction) {
    const id = Number(req.params.id);
    const result = await this.todoService.findById(id);
    if (!result) {
      res.status(404).send(`Todo with ${id} id, doesnt exist`);
      return;
    }
    next();
  }
}

const todoController = new TodoController(new TodoService());
export default todoController;
