import { Column, Entity } from "typeorm";

@Entity()
export class Student {
    @Column({ unique: true })
    studentId: string
}
