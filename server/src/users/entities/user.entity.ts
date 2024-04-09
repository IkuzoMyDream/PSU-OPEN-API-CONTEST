import { Comment } from "src/comments/entities/comment.entity";
import { Post } from "src/posts/entities/post.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true })
    studentId: string

    @OneToMany(() => Post, (post) => post.owner)
    posts: Post[]

    @OneToMany(() => Comment, (comment) => comment.owner)
    comments: Comment[]
}
