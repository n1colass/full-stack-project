export interface ITodo {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
  private: boolean;
  userId?: string;
}
