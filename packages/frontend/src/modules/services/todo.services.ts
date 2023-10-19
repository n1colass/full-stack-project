import HttpServices from './http.services';
import { ITodo } from '../common/types/todo.types';
import { BACKEND_KEYS } from '../common/consts/app-keys.const';

class TodoHttp extends HttpServices {
  async getTodos(): Promise<ITodo[]> {
    const response: { data: ITodo[] } = await this.get({ url: BACKEND_KEYS.TODOS }, false);

    return response.data;
  }

  async searchTodo(title: string): Promise<void> {
    await this.get({ url: `${BACKEND_KEYS.TODOS}/${BACKEND_KEYS.SEARCH}${title}` }, false);
  }

  async createTodo(todo: Pick<ITodo, 'title' | 'description'>): Promise<void> {
    await this.post({ url: `${BACKEND_KEYS.TODOS}`, data: todo }, false);
  }

  async deleteTodo(id: string): Promise<void> {
    await this.delete({ url: `${BACKEND_KEYS.TODOS}/${id}` }, false);
  }
}

const todoHttp = new TodoHttp();
export default todoHttp;
