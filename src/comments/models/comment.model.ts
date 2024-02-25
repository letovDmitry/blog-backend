import {
  Table,
  Column,
  Model,
  HasOne,
  ForeignKey,
  PrimaryKey,
  BelongsTo,
  DataType,
} from 'sequelize-typescript';
import { Post } from 'src/posts/models/post.model';

@Table
export class Comment extends Model<Comment> {
  @Column
  title: string;

  @Column
  text: string;

  @ForeignKey(() => Post)
  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  postId: number;

  @BelongsTo(() => Post)
  post: Post;
}
