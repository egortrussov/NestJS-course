import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserSchema } from '../schemas/User.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'user', schema: UserSchema }])  
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
