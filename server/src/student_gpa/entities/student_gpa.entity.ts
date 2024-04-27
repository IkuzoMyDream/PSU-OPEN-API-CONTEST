import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class StudentGpa {
    @PrimaryColumn()
    studentId: string

    @Column({ nullable: false })
    cumGpa: string
}
