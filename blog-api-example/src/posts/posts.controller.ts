import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { createPostDto } from './dto/create-post.dto'
import { post } from './intrefaces/post.interface'
import { PostsService } from './posts.service'

@Controller('posts')
export class PostsController {
    constructor (private postsService: PostsService) {}

    @Get()
    findAll(): post[] {
        return this.postsService.getAll()
    } 

    @Get(':id')
    findOne(@Param() params): post {
        return this.postsService.getOneById(params.id);
    }

    @Post('/createPost')
    createPost(@Body() body: createPostDto): post[] {
        return this.postsService.create(body);
    }
}
