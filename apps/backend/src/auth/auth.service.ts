import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    email: string,
    pwd: string,
  ): Promise<{
    access_token: string;
    user: { name: string; id: string };
  }> {
    const user = await this.usersService.findOneByEmail(email);
    if (!user) {
      throw new UnauthorizedException();
    }
    const isMatch = await user.comparePassword(pwd);
    if (!isMatch) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user._id, user: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
      user: { id: user._id.toString(), name: user.name },
    };
  }
}
