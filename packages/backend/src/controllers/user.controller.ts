import { Response, Request, NextFunction } from 'express';
import UserService from '../services/user.service';
import { IRequestEmail, IUser } from '../types/user.type';

export class UserController {
  constructor(private userService: UserService) {
    this.nonExistUser = this.nonExistUser.bind(this);
    this.existUser = this.existUser.bind(this);
  }

  async getAllUsers() {
    const users = await this.userService.findAll();
    return users;
  }

  async addUser(newUser: IUser) {
    const user = await this.userService.createUser(newUser);
    return user;
  }

  async getById(id: number) {
    const user = await this.userService.findById(id);
    return user;
  }

  async getByEmail(email: string) {
    const user = await this.userService.findByEmail(email);
    return user;
  }

  async nonExistUser(req: Request<any, any, IUser>, res: Response) {
    const { email } = req.body;
    const result = await this.userService.findByEmail(email);
    if (!result) {
      res.status(404).send(`User with ${email} email, doesnt exist`);
      return;
    }
    return result;
  }

  async existUser(req: Request<any, any, IRequestEmail>, res: Response, next: NextFunction) {
    const { email } = req.body;
    const result = await this.userService.findByEmail(email);
    if (result) {
      res.status(404).send(`User with ${email} email, is already exist`);
      return;
    }
    next();
  }
}

const userController = new UserController(new UserService());
export default userController;
