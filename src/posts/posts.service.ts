import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/input/create-post.input';
import { v4 as uuidv4 } from 'uuid';
import { Post } from './models/post.model';
import { UpdatePostInput } from './dto/input/update-post.input';
import { GetPostArgs } from './dto/args/get-post.args';
import { GetPostsArgs } from './dto/args/get-posts.args';
import { DeletePostInput } from './dto/input/delete-user.input';

@Injectable()
export class PostsService {
  private posts: Post[] = [];

  createPost(createUserData: CreatePostInput): Post {
    const post: Post = {
      postId: uuidv4(),
      ...createUserData,
    };
    this.posts.push(post);
    return post;
  }

  updatePost(updateUserData: UpdatePostInput): Post {
    const post = this.posts.find(
      (post) => post.postId === updateUserData.postId,
    );

    Object.assign(post, updateUserData);

    return post;
  }

  getPost(getPostArgs: GetPostArgs): Post {
    return this.posts.find((post) => post.postId === getPostArgs.postId);
  }

  getPosts(getPostsArgs: GetPostsArgs): Post[] {
    return getPostsArgs.postIds.map((postId) => this.getPost({ postId }));
  }

  deletePost(deleteUserData: DeletePostInput): Post {
    const postIndex = this.posts.findIndex(
      (post) => post.postId === deleteUserData.postId,
    );

    const post = this.posts[postIndex];

    this.posts.slice(postIndex);

    return post;
  }
}
