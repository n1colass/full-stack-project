import { Router } from 'express';
import todoController from '../../controllers/todo.controller';
import { tryCatch } from '../../middlewares/tryCatch';
import { todoValidator } from '../../middlewares/validators';

const todosRouter: Router = Router();

todosRouter.get('', tryCatch(todoController.getAllTodo.bind(todoController)));

todosRouter.get('/search', tryCatch(todoController.getTodoByTitle.bind(todoController)));

todosRouter.post('', todoValidator, tryCatch(todoController.createTodo.bind(todoController)));

todosRouter.get(
  '/:id',
  tryCatch(todoController.isExistTodo),
  tryCatch(todoController.getById.bind(todoController))
);

todosRouter.put(
  '/:id',
  todoValidator,
  tryCatch(todoController.isExistTodo),
  tryCatch(todoController.updateTodo.bind(todoController))
);

todosRouter.delete(
  '/:id',
  tryCatch(todoController.isExistTodo),
  tryCatch(todoController.deleteTodo.bind(todoController))
);

export default todosRouter;
