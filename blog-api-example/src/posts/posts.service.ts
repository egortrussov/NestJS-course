import { Injectable, Inject } from '@nestjs/common';
import { post } from './intrefaces/post.interface';
import { createPostDto } from './dto/create-post.dto'
import { Model } from 'mongoose'

@Injectable()
export class PostsService {
    constructor(
        @Inject('POST_MODEL')
        private postModel: Model <post>,
      ) {}

    async getAll(): Promise <post[]> {
        return this.postModel.find();
    }

    async getOneById(id: string): Promise <post> {
        return this.postModel
            .findOne({ _id: id })
    }

    async create(newPost: createPostDto): Promise <post> {
        let postInt = {
            title: newPost.title,
            body: newPost.body,
            author: newPost.author,
            comments: newPost.comments
        }
        const createdPost = new this.postModel(postInt);
        return createdPost.save();
    }
}
