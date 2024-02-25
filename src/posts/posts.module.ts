import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Post } from './models/post.model';
import { Comment } from '../comments/models/comment.model';

@Module({
  imports: [SequelizeModule.forFeature([Post, Comment])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
