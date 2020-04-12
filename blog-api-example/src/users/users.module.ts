import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service'
import { UsersController } from './users.controller'
import { UserSchema } from '../schemas/User.schema'

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'USER_MODEL', schema: UserSchema }])
    ],
    controllers: [ UsersController ],
    providers: [ UsersService ]
})
export class UsersModule {}
