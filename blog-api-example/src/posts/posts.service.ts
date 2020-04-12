import { Injectable, Inject } from '@nestjs/common';
import { post } from './intrefaces/post.interface';
import { createPostDto } from './dto/create-post.dto'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'

@Injectable()
export class PostsService {
    constructor(
        @InjectModel('post')
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

    async addComment(postId: string, text: string): Promise <post> {
        return this.postModel.findOneAndUpdate({ _id: postId }, { $push: { comments: text } })
    }
}
