import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { UsersService } from './users.service'
import { user } from './interfaces/user.interface'
import { createUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    
    @Post('/createUser')
    createUser(@Body() body: createUserDto): user[] {
        console.log(body)
        return this.usersService.addUser(body);
    }

    @Get(':id')
    findOne(@Param() params): user {
        return this.usersService.getUserById(params.id)
    }
}
