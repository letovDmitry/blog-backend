import {
  Controller,
  Get,
  Post,
  Query,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getPosts(@Query('page', new ParseIntPipe()) page) {
    return this.postsService.getPosts(page || 1);
  }

  @Post()
  createPost(@Body() dto: CreatePostDto) {
    return this.postsService.createPost(dto.title, dto.text);
  }
}
