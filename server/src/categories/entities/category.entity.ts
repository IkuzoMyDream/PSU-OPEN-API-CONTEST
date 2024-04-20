import { Course } from "src/courses/entities/course.entity";
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

enum CategoryType {
    GENERAL_EDU = "General Education",
    PROFESSION_EDU = "Profession Education",
    FREE_ELECTIVE_EDU = "Free Elective Education"
}

enum GeneralEducationType {
    REQUIRED = "Required",
    ELECTIVE = "Elective"
}

enum ProfessionEducationType {
    BASIC_PROFRESSION = "Basic Profession",
    PROFRESSION = "Profession"
}

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    catagoryId: string

    @Column({ type: "simple-enum", nullable: false })
    categoryType: CategoryType

    // วิชาทั่วไป
    @Column({ type: "simple-enum", nullable: true })
    generalType: GeneralEducationType

    @Column({ nullable: true })
    subjectGroupNumber: string

    @Column({ nullable: true })
    subjectGroupName: string

    // วิชาชีพ
    @Column({ type: "simple-enum", nullable: true })
    professionType: ProfessionEducationType

    @OneToMany(() => Course, (course) => course.category)
    courses: Course[]
}
