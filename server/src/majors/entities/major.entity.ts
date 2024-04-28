import { Course } from "src/courses/entities/course.entity";
import { CurriculumStructure } from "src/curriculum_structures/entities/curriculum_structure.entity";
import { Department } from "src/departments/entities/department.entity";
import { Student } from "src/students/entities/student.entity";
import { SubCategory } from "src/sub_categories/entities/sub_category.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";

@Entity()
export class Major {
    @PrimaryColumn({ unique: true, nullable: false })
    majorId: string

    @Column()
    majorNameThai: string

    @Column()
    majorNameEng: string

    @ManyToOne(() => Department, (department) => department.majorIds)
    deptId: Department

    @OneToMany(() => Student, (student) => student.majorId)
    studentIds: Student[]

    @OneToMany(() => Course, (course) => course.majorId)
    courses: Course[]

    @OneToMany(() => CurriculumStructure, (curriculum_structure) => curriculum_structure.majorId)
    curriculumStructureIds: CurriculumStructure[]

    @OneToMany(() => SubCategory, (sub_category) => sub_category.majorId)
    subCategoryIds: SubCategory[]

}
