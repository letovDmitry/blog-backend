import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class AddCommentDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  text: string;

  @IsNotEmpty()
  @IsNumber()
  postId: number;
}
