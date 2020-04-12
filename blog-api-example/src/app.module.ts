import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { PostModule } from './posts/post.module'
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/nestjs', {
    useNewUrlParser: true
  }), PostModule],
  controllers: [AppController],
  providers: [AppService], 
})
export class AppModule {}
