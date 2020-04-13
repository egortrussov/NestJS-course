import { Controller, Get, Body } from '@nestjs/common';
import { LoginDto } from './dto/Login.dto'
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
    constructor(private authServise: AuthService) {}

    @Get('/login')
    async login(@Body() body: LoginDto): Promise <string> {
        return this.authServise.login(body);
    }

}
