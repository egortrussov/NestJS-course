import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { PostSchema } from '../schemas/Post.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'post', schema: PostSchema }])],
  controllers: [PostsController],
  providers: [PostsService]
})

export class PostModule {}