import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/Login.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { user } from './interfaces/user.interface';
const jwt = require('jsonwebtoken');

@Injectable()
export class AuthService {
    constructor(
        @InjectModel('user')
        private userSchema: Model <user>
    ) {}

    async login(creds: LoginDto): Promise <string> {
        let userToLogin = await this.userSchema.findOne({ fullName: creds.fullName });
        if (userToLogin) {
            if (userToLogin.password === creds.password) {
                let token = jwt.sign({ ...creds }, 'secret', {
                    expiresIn: 3600
                });
                return token;
            }
            return 'Incorrect password'
        }
        
        return 'User does not exist';
    }
}
