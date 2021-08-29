import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field()
  postId: string;

  @Field()
  title: string;

  @Field()
  body: string;

  @Field()
  author: string;
}
