import { Router } from 'express';
import userController from '../../controllers/user.controller';
import authController from '../../controllers/auth.controller';
import { tryCatch } from '../../middlewares/tryCatch';
import { userValidator } from '../../middlewares/validators';
import { checkAuth } from '../../middlewares/checkAuth';

const userRouter: Router = Router();

userRouter.get('/', checkAuth, tryCatch(userController.getAllUsers.bind(userController)));
userRouter.post(
  '/registration',
  userValidator,
  tryCatch(authController.registration.bind(authController))
);
userRouter.post('/login', tryCatch(authController.login.bind(authController)));
userRouter.post('/logout', tryCatch(authController.logout.bind(authController)));
userRouter.post('/refresh', tryCatch(authController.updateToken.bind(authController)));

export default userRouter;
