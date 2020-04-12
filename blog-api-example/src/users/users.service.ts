import { Injectable } from '@nestjs/common';
import { user } from './interfaces/user.interface';
import { createUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserSchema } from 'src/schemas/User.schema';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel('USER_MODEL')
        private userModel: Model <user>
    ) {}

    async getUserById(id: string): Promise <user> {
        let foundUser = await this.userModel.findById(id);
        return foundUser;
    }
    
    async addUser(newUser: createUserDto): Promise <user> {
        let createdUser = new this.userModel(newUser);
        return createdUser.save();
    }
}
