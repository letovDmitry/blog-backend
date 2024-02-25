import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Comment } from './models/comment.model';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment)
    private readonly commentModel: typeof Comment,
  ) {}

  async addComment(title: string, text: string, postId: number) {
    const comment = new Comment({
      title,
      text,
      postId,
    });
    return await comment.save();
  }

  async updateComment(dto: UpdateCommentDto, commentId: number) {
    return await this.commentModel.update(dto, {
      where: {
        id: commentId,
      },
    });
  }

  async deleteComment(commentId: number) {
    return await this.commentModel.destroy({
      where: {
        id: commentId,
      },
    });
  }
}
