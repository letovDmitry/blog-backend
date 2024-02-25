import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Post } from './models/post.model';
import { Comment } from 'src/comments/models/comment.model';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post)
    private readonly postModel: typeof Post,
  ) {}

  async getPosts(page: number) {
    const pageSize = 20;
    const offset = (page - 1) * pageSize;

    return await this.postModel.findAndCountAll({
      limit: pageSize,
      offset: offset,
      include: [
        {
          model: Comment,
          as: 'comments',
        },
      ],
    });
  }

  async createPost(title: string, text: string) {
    const post = new Post({ title, text });
    return await post.save();
  }
}
