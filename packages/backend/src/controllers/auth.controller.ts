import { Response, Request } from 'express';
import bcrypt from 'bcryptjs';
import userController from './user.controller';
import TokenService from '../services/token.service';
import { User } from '../entities/User';
import { IUser } from '../types/user.type';
import { ApiError } from '../errors/apiError';

export class AuthController {
  constructor(private tokenService: TokenService) {}

  async test() {
    const users = userController.getAllUsers();
    return users;
  }

  async registration(req: Request<any, any, IUser>) {
    const { email, password } = req.body;
    const user = await userController.getByEmail(email);
    if (user) {
      throw ApiError.ConflictResources();
    }
    const hashPassword = bcrypt.hashSync(password, 7);
    await userController.addUser({ email, password: hashPassword });

    return 'Registration is successfuly done!';
  }

  async login(req: Request<any, any, IUser>, res: Response) {
    const { email, password } = req.body;

    const user = await userController.getByEmail(email);
    if (user === null) {
      throw ApiError.NotFound();
    }
    const passwordEquals = await bcrypt.compare(password, user.password);
    if (!passwordEquals) {
      throw ApiError.NotFound();
    }

    const tokens = this.tokenService.generateTokens(user);
    await this.tokenService.saveToken(user, tokens.refreshToken);

    res.cookie('refreshToken', tokens.refreshToken, {
      maxAge: 10 * 24 * 60 * 60 * 1000,
      httpOnly: true
    });
    return tokens.accessToken;
  }

  async updateToken(req: Request) {
    const { refreshToken } = req.cookies;
    if (refreshToken === null) {
      throw ApiError.NotFound();
    }

    const verifyToken = this.tokenService.verifyRefreshToken(refreshToken);
    const tokenInfo = await this.tokenService.findToken(refreshToken);
    if (!tokenInfo || !verifyToken) {
      throw ApiError.NotFound();
    }

    const user = await userController.getById(verifyToken.id);
    const accToken = this.tokenService.genAccesshToken(user as User);
    return accToken;
  }

  async logout(req: Request, res: Response) {
    const { refreshToken } = req.cookies;
    const tokenInfo = await this.tokenService.deleteToken(refreshToken);
    res.clearCookie('refreshToken');
    return tokenInfo;
  }
}

const authController = new AuthController(new TokenService());
export default authController;
