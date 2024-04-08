import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 30 })
    title: string;
}
