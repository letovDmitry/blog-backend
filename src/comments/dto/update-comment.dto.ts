import { IsOptional, IsString, IsNumber } from 'class-validator';

export class UpdateCommentDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  text?: string;
}
