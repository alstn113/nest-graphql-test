import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { GetPostArgs } from './dto/args/get-post.args';
import { GetPostsArgs } from './dto/args/get-posts.args';
import { CreatePostInput } from './dto/input/create-post.input';
import { DeletePostInput } from './dto/input/delete-user.input';
import { UpdatePostInput } from './dto/input/update-post.input';
import { Post } from './models/post.model';
import { PostsService } from './posts.service';

@Resolver(() => Post)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query(() => Post, { name: 'post', nullable: true })
  getPost(@Args() getPostArgs: GetPostArgs): Post {
    return this.postsService.getPost(getPostArgs);
  } // 여기 db면 async 붙여야함

  @Query(() => [Post], { name: 'posts', nullable: 'items' })
  getPosts(@Args() getPostsArgs: GetPostsArgs): Post[] {
    return this.postsService.getPosts(getPostsArgs);
  }

  @Mutation(() => Post)
  createPost(@Args('createPostData') createPostData: CreatePostInput): Post {
    return this.postsService.createPost(createPostData);
  }

  @Mutation(() => Post)
  updatePost(@Args('updatePostData') updatePostData: UpdatePostInput): Post {
    return this.postsService.updatePost(updatePostData);
  }

  @Mutation(() => Post)
  deletePost(@Args('deletePostData') deletePostData: DeletePostInput): Post {
    return this.postsService.deletePost(deletePostData);
  }
}
