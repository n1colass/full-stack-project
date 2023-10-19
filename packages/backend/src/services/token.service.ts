import jwt from 'jsonwebtoken';
import { Token } from '../entities/Token';
import { User } from '../entities/User';
import { ApiError } from '../errors/apiError';
import { JwtInfoUser } from '../types/auth.type';

export default class TokenService {
  async saveToken(user: User, refreshToken: string): Promise<Token> {
    const token = await Token.findOne({ where: { user: { id: user.id } } });
    if (token) {
      token.refreshToken = refreshToken;
      await token.save();
      return token;
    }

    const newToken = Token.create({ user, refreshToken });
    await newToken.save();
    return newToken;
  }

  async findToken(refreshToken: string) {
    const tokenInfo = await Token.findOne({ where: { refreshToken } });
    return tokenInfo;
  }

  async deleteToken(refreshToken: string) {
    const tokenInfo = await Token.delete({ refreshToken });
    return tokenInfo;
  }

  generateTokens(user: User) {
    const payload = { email: user.email, id: user.id };
    const accessToken = this.genAccesshToken(user);
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET || '', {
      expiresIn: '10d'
    });
    return {
      accessToken,
      refreshToken
    };
  }

  genAccesshToken(user: User) {
    const payload = { email: user.email, id: user.id };
    return jwt.sign(payload, process.env.JWT_ACCESS_SECRET || '', { expiresIn: '15m' });
  }

  verifyAccessToken(token: string) {
    try {
      const tokenInfo = jwt.verify(token, process.env.JWT_ACCESS_SECRET || '');
      return tokenInfo;
    } catch (error: any) {
      throw ApiError.UnautorizeError(error);
    }
  }

  verifyRefreshToken(token: string) {
    try {
      const tokenInfo = <JwtInfoUser>jwt.verify(token, process.env.JWT_REFRESH_SECRET || '');
      return tokenInfo;
    } catch (error: any) {
      throw ApiError.UnautorizeError(error);
    }
  }
}
