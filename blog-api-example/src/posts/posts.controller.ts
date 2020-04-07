import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { createPostDto } from './dto/create-post.dto'
import { post } from './intrefaces/post.interface'
import { PostsService } from './posts.service'

@Controller('posts')
export class PostsController {
    constructor (private postsService: PostsService) {}

    @Get()
    async findAll(): Promise <post[]> {
        return this.postsService.getAll()
    } 

    @Get(':id')
    async findOne(@Param() params): Promise <post> {
        return this.postsService.getOneById(params.id);
    }

    @Post('/createPost')
    async createPost(@Body() body: createPostDto): Promise <post> {
        return this.postsService.create(body);
    }
}
