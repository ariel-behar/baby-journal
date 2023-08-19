// Temporary data

import { Post } from "@/models/Post";
import { IdType } from "@/types/common-types";

const posts = [
    {
        id: 1,
        title: 'First Post',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec turpis nec est tincidunt ultricies. Nulla facilisi. Donec vel nunc sit amet nunc vulputate ultricies. Quisque nec odio nec nunc lacinia luctus. Donec nec ultricies mi. Donec nec turpis nec est tincidunt ultricies. Nulla facilisi. Donec vel nunc sit amet nunc vulputate ultricies. Quisque nec odio nec nunc lacinia luctus. Donec nec ultricies mi.',
        userId: 1
    },
    {
        id: 2,
        title: 'Second Post',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec turpis nec est tincidunt ultricies. Nulla facilisi. Donec vel nunc sit amet nunc vulputate ultricies. Quisque nec odio nec nunc lacinia luctus. Donec nec ultricies mi. Donec nec turpis nec est tincidunt ultricies. Nulla facilisi. Donec vel nunc sit amet nunc vulputate ultricies. Quisque nec odio nec nunc lacinia luctus. Donec nec ultricies mi.',
        userId: 2
    },
    {
        id: 3,
        title: 'Third Post',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec turpis nec est tincidunt ultricies. Nulla facilisi. Donec vel nunc sit amet nunc vulputate ultricies. Quisque nec odio nec nunc lacinia luctus. Donec nec ultricies mi. Donec nec turpis nec est tincidunt ultricies. Nulla facilisi. Donec vel nunc sit amet nunc vulputate ultricies. Quisque nec odio nec nunc lacinia luctus. Donec nec ultricies mi.',
        userId: 3
    }
]

const users = [
    {
        id: 1,
        name: 'John Doe'
    },
    {
        id: 2,
        name: 'Jane Doe'
    },
    {
        id: 3,
        name: 'James Doe'
    }

]

export const  getPosts = async () => {
    return posts;
}

export const getPost = async (postId: IdType) => {
    return posts.find(post => post.id === Number(postId));
}

export const getUser = async (userId: IdType) => {
    return users.find(user => user.id === Number(userId));
}

