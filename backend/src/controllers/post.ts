import { Request, Response, NextFunction } from "express";

import { validationResult } from "express-validator";

import { Post } from "../models/post";
import { User } from "../models/user";

import { PostSchemaType } from "../types/post";

import CustomError from "../utils/error";

export const postCreatePost = async (req: Request, res: Response, next: NextFunction) => {
    const { title, image, description } = req.body as PostSchemaType;
    const errors = validationResult(req);
    try {
        if (!errors.isEmpty()) {
            const message = errors.array()[0].msg;
            const error = new CustomError(message, 422);
            throw error;
        }

        const newPost = await Post.create({
            title: title,
            image: image,
            description: description,
            creator: req.userId
        });
        await newPost.save();

        const user = await User.findById(req.userId);
        if (!user) {
            const message = 'Error. User not found!';
            const error = new CustomError(message, 404);
            throw error;
        }

        user.posts.push(newPost);
        await user.save();

        res.status(201).json({ "message": "Post created" });
    } catch (err) {
        next(err);
    }
}

export const getPosts = async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = req;
    try {
        const posts = await Post
            .find({ 'creator': userId })
            .populate('creator', ['name', 'surname', 'profileImage'])
            .sort({ 'createdAt': 'desc' });

        if (!posts) {
            const message = 'No posts found.';
            const error = new CustomError(message, 404);
            throw error;
        }

        const postsForResponse = posts.map(post => {
            const day = post.createdAt.toISOString().split('T')[0];
            const time = post.createdAt.toISOString().split('T')[1].slice(0, 8);
            const creationDate = `${time} ${day}`;

            return {
                id: post._id.toString(),
                title: post.title,
                image: post.image,
                description: post.description,
                creator: {
                    name: post.creator.name,
                    surname: post.creator.surname,
                    profileImage: post.creator.profileImage,
                },
                creationDate: creationDate
            }
        });

        res.status(200).json(postsForResponse);
    } catch (err) {
        next(err);
    }
};

export const getAllPosts = async (req: Request, res: Response, next: NextFunction) => {
    const { page } = req.query;

    const perPage = 2;
    // console.log('PAGE');
    // console.log(page);
    try {
        const postsLength = await Post.countDocuments();
        // console.log('POSTS LENGTH ' + postsLength);

        const hasMore = ((+page! * perPage) - 1);
        // console.log('hasNext ' + hasMore);
        const posts = await Post
            .find()
            .sort({ 'createdAt': 'desc' })
            .limit(perPage)
            .skip((+page! - 1) * perPage)
            .populate('creator', ['name', 'surname', 'profileImage'])

        if (!posts) {
            const message = 'No posts found.';
            const error = new CustomError(message, 404);
            throw error;
        }

        const postsForResponse = posts.map(post => {
            const day = post.createdAt.toISOString().split('T')[0];
            const time = post.createdAt.toISOString().split('T')[1].slice(0, 8);
            const creationDate = `${time} ${day}`;

            return {
                id: post._id.toString(),
                title: post.title,
                image: post.image,
                description: post.description,
                creator: {
                    name: post.creator.name,
                    surname: post.creator.surname,
                    profileImage: post.creator.profileImage,
                },
                creationDate: creationDate
            }
        });

        const resData = {
            allPosts: postsForResponse,
            hasMore: postsLength >= hasMore ? true : false,
        }
        res.status(200).json(resData);
    } catch (err) {
        next(err);
    }
}

export const getPost = async (req: Request, res: Response, next: NextFunction) => {
    const { postId } = req.params;
    try {
        const post = await Post
            .findById(postId)
            .populate('creator', ['name', 'surname'])
        if (!post) {
            const message = 'Post was not found.';
            const error = new CustomError(message, 404);
            throw error;
        }

        const postObj = {
            postId: post._id.toString(),
            title: post.title,
            image: post.image,
            description: post.description,
            creator: {
                name: post.creator.name,
                surname: post.creator.surname,
            }
        }

        res.status(200).json(postObj);

    } catch (err) {
        next(err);
    }
}

export const deletePost = async (req: Request, res: Response, next: NextFunction) => {
    const { postId } = req.params;
    const { userId } = req;
    try {
        const post = await Post.deleteOne({ _id: postId });
        if (!post) {
            const message = 'Error. Post not found.';
            const error = new CustomError(message, 404);
            throw error;
        }

        const user = await User.findById(userId);
        if (!user) {
            const message = 'Error. User not found';
            const error = new CustomError(message, 404);
            throw error;
        }

        user.posts.pull(postId);
        await user.save();

        res.status(200).json({ "message": "Post has been removed from the Database." });
    } catch (err) {
        next(err);
    }
}

export const getEditPost = async (req: Request, res: Response, next: NextFunction) => {
    const { postId } = req.params;
    try {
        const post = await Post.findById(postId);
        if (!post) {
            const message = 'Error. Post not found';
            const error = new CustomError(message, 404);
            throw error;
        }

        const postObj = {
            postId: post._id.toString(),
            title: post.title,
            image: post.image,
            description: post.description,
            creator: {
                name: post.creator.name,
                surname: post.creator.surname,
            }
        }

        res.status(200).json(postObj);

    } catch (err) {
        next(err);
    }
}

export const postEditPost = async (req: Request, res: Response, next: NextFunction) => {
    const { postId } = req.params;
    const { title, image, description } = req.body as { title: string; image: string; description: string };
    const errors = validationResult(req);
    try {
        if (!errors.isEmpty()) {
            const message = errors.array()[0].msg;
            const error = new CustomError(message, 422);
            throw error;
        }

        const post = await Post.findById(postId);
        if (!post) {
            const message = 'Post not found';
            const error = new CustomError(message, 404);
            throw error;
        }

        post.title = title;
        post.image = image;
        post.description = description;

        await post.save();

        const updatedPost = {
            title: post.title,
            image: post.image,
            description: post.description
        }

        res.status(200).json({ updatedPost: updatedPost, message: 'Post has been updated successfully' });
    } catch (err) {
        next(err);
    }
}