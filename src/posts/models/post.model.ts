import { Table, Column, Model, HasMany, ForeignKey, PrimaryKey } from 'sequelize-typescript';
import { Comment } from '../../comments/models/comment.model'

@Table
export class Post extends Model<Post> { 
  @Column
  title: string;

  @Column
  text: string;

  @HasMany(() => Comment)
  comments: Comment[]
}