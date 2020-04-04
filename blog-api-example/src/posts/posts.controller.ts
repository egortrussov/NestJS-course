import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { createPostDto } from './dto/create-post.dto'
import { post } from './intrefaces/post.interface'

@Controller('posts')
export class PostsController {

    @Get()
    findAll(): String {
        return 'All posts'
    } 

    @Get(':id')
    findOne(@Param() params): String {
        return 'Post with id: ' + params.id;
    }

    @Post('/createPost')
    createPost(@Body() body: createPostDto): createPostDto {
        return body;
    }
}
