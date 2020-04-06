import * as mongoose from 'mongoose'

export const PostSchema = new mongoose.Schema({
    title: String,
    body: String,
    author: String,
    comments: [String]
})