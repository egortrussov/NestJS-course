import { Injectable } from '@nestjs/common';
import { user } from './interfaces/user.interface';
import { createUserDto } from './dto/create-user.dto'

@Injectable()
export class UsersService {
    private readonly users: user[] = [
        {
            id: '1',
            fullName: 'User1',
            password: '111111',
            posts: []
        }
    ]

    getUserById(id: string): user {
        return this.users[this.users.findIndex((currUser: user) => currUser.id === id)]
    }
    
    addUser(newUser: createUserDto): user[] {
        let userToCreate: user = {
            ...newUser,
            posts: [],
            id: this.users.length.toString()
        }
        this.users.push(userToCreate);
        return this.users;
    }
}
