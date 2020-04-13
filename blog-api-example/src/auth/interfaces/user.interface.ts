import { Document } from 'mongoose';

export interface user extends Document {
    id?: string,
    fullName: string,
    posts: string[],
    password: string
}