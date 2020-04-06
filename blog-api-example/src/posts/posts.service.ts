import { Injectable, Inject } from '@nestjs/common';
import { post } from './intrefaces/post.interface';
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

    // getOneById(id): post {
    //     return this.posts[this.posts.findIndex((currPost: post) => currPost.id === id)]
    // }

    // create(newPost: post): post[] {
    //     this.posts.push(newPost);
    //     return this.posts;
    // }
}
