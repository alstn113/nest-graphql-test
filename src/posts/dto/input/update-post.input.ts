import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class UpdatePostInput {
  @Field()
  @IsNotEmpty()
  postId: string;

  @Field()
  @IsOptional()
  @IsNotEmpty()
  title?: string;

  @Field()
  @IsOptional()
  @IsNotEmpty()
  body?: string;

  @Field()
  @IsOptional()
  @IsNotEmpty()
  author?: string;
}
