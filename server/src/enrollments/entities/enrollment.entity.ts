import { Course } from "src/courses/entities/course.entity"
import { Entity, Column, PrimaryColumn, OneToOne, ManyToMany, ManyToOne } from "typeorm"

@Entity()
export class Enrollment {
    @PrimaryColumn({ unique: true, nullable: false })
    studentId: string

    @ManyToOne(() => Course, (course) => course.studentIds)
    courseId: Course

    @Column({ nullable: false })
    registCredit: string

    @Column({ nullable: false })
    withdrawalType: string

}