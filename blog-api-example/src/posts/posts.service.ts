import { Injectable } from '@nestjs/common';
import { post } from './intrefaces/post.interface';

@Injectable()
export class PostsService {
    private readonly posts: post[] = [
        {
            id: '1',
            title: 'One',
            body: 'Bodyy',
            author: 'Me',
            comments: []
        },
        {
            id: '2',
            title: 'Two',
            body: 'Bodyyyyy',
            author: 'not Me',
            comments: ['Nice.']
        },
    ];

    getAll(): post[] {
        return this.posts;
    }

    getOneById(id): post {
        return this.posts[this.posts.findIndex((currPost: post) => currPost.id === id)]
    }

    create(newPost: post): post[] {
        this.posts.push(newPost);
        return this.posts;
    }
}
