import { Course } from "src/courses/entities/course.entity"
import { Student } from "src/students/entities/student.entity"
import { Entity, Column, PrimaryColumn, OneToOne, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Enrollment {
    @PrimaryGeneratedColumn()
    enrollmentId: string

    @ManyToOne(() => Student, (student) => student.enrollmentIds)
    studentId: Student

    @ManyToOne(() => Course, (course) => course.enrollmentIds)
    courseId: Course

    @Column({ nullable: true })
    isLegal: boolean

}