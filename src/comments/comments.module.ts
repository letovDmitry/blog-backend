import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Post } from 'src/posts/models/post.model';
import { Comment } from './models/comment.model';

@Module({
  imports: [SequelizeModule.forFeature([Post, Comment])],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
