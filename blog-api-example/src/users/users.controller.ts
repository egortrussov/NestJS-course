import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { UsersService } from './users.service'
import { user } from './interfaces/user.interface'
import { createUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    
    @Post('/createUser')
    async createUser(@Body() body: createUserDto): Promise <user> {
        return this.usersService.addUser(body);
    }

    @Post('/addPost')
    async addPostToUser(@Body() body): Promise <user> {
        console.log(body)
        return this.usersService.addPostToUser(body.userId, body.postId);
    }

    @Get(':id')
    async findOne(@Param() params): Promise <user> {
        return this.usersService.getUserById(params.id)
    }
}
