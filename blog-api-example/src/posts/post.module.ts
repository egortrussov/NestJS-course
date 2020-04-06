import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { postProvider } from './post.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [PostsController],
  providers: [
    PostsService,
    ...postProvider,
  ],
})

export class PostModule {}