import { User } from '../entities/User';
import { IUser } from '../types/user.type';

export default class UserService {
  async findAll(): Promise<User[]> {
    const allUsers = await User.find();
    return allUsers;
  }

  async findById(id: number) {
    const res = await User.findOneBy({ id });
    return res;
  }

  async findByEmail(email: string) {
    const res = await User.findOneBy({ email });
    return res;
  }

  async createUser(user: IUser) {
    const addUser = User.create({ email: user.email, password: user.password });
    const res = await User.save(addUser);
    return res;
  }
}
