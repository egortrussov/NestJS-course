import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './posts/post.module'
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AuthMiddleware } from './middleware/auth.middleware'

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/nestjs', {
    useNewUrlParser: true
  }), PostModule, UsersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService], 
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer 
      .apply(AuthMiddleware)
      .forRoutes('posts')
  }
}
