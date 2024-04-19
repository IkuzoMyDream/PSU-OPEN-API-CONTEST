import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Student {
    @PrimaryColumn({ unique: true })
    studentId: string
}
