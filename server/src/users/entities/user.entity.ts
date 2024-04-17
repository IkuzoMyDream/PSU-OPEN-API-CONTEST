import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true })
    studentId: string

    @Column({ nullable: false })
    firstname: string

    @Column({ nullable: false })
    lastname: string

}
