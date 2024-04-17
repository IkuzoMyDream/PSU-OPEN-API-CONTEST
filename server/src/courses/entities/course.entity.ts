import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

interface Prerequisite {
    courseId: number;
    minGrade: number;
}

interface Corequisite {
    courseId: number;
    minGrade: number;
}

interface Concurrent {
    courseId: number;
    minGrade: number;
}

enum CourseCondition {
    NONE = null,
    PQ = Prerequisite,
    CQ = Corequisite,
    CC = Concurrent,
}

@Entity()
export class Course {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    credit: number;

    @Column({ nullable: true, type: "simple-enum" })
    courseCondition: CourseCondition;
}
