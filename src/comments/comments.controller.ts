import {
  Controller,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { AddCommentDto } from './dto/add-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  addComment(@Body() dto: AddCommentDto) {
    return this.commentsService.addComment(dto.title, dto.text, dto.postId);
  }

  @Patch('/:id')
  updateComment(
    @Body() dto: UpdateCommentDto,
    @Param('id', new ParseIntPipe()) commentId: number,
  ) {
    return this.commentsService.updateComment(dto, commentId);
  }

  @Delete('/:id')
  deleteComment(@Param('id', new ParseIntPipe()) commentId: number) {
    return this.commentsService.deleteComment(commentId);
  }
}
