import * as mongoose from 'mongoose'

export const UserSchema = new mongoose.Schema({
    fullName: String,
    password: String,
    posts: [String],
})