import { Course } from "src/courses/entities/course.entity";
import { CurriculumStructure } from "src/curriculum_structures/entities/curriculum_structure.entity";
import { Department } from "src/departments/entities/department.entity";
import { Major } from "src/majors/entities/major.entity";
import { Student } from "src/students/entities/student.entity";
import { SubCategory } from "src/sub_categories/entities/sub_category.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity()
export class Faculty {
    @PrimaryColumn({ unique: true, nullable: false })
    facId: string

    @Column()
    facNameThai: string

    @Column()
    facNameEng: string

    @OneToMany(() => Department, (department) => department.facId)
    deptIds: Department[]

    @OneToMany(() => Student, (student) => student.facId)
    studentIds: Student[]

    @OneToMany(() => Course, (course) => course.facId)
    courses: Course[]

    @OneToMany(() => CurriculumStructure, (curriculum_structure) => curriculum_structure.facId)
    curriculumStructureIds: CurriculumStructure[]

    @OneToMany(() => SubCategory, (subcategory) => subcategory.facId)
    subCategoryIds: SubCategory[]

}
