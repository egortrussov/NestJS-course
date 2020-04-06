import { Connection } from 'mongoose';
import { PostSchema } from '../schemas/Post.schema'

export const postProvider = [
    {
        provide: 'POST_MODEL',
        useFactory: (connection: Connection) => connection.model('Post', PostSchema),
        inject: ['DATABASE_CONNECTION'],
    }
]