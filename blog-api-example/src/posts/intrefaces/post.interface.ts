import { Document } from 'mongoose'

export interface post extends Document {
    id?: string,
    title: string,
    body: string,
    author: string,
    comments: string[]
}