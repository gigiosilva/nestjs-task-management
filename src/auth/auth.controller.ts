import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() authCredencialsDto: AuthCredentialsDto): Promise<void> {
    return this.authService.signUp(authCredencialsDto);
  }

  @Post('/signin')
  signIn(
    @Body() authCredencialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredencialsDto);
  }
}
