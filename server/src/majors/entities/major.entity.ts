import { Course } from "src/courses/entities/course.entity";
import { CurriculumStructure } from "src/curriculum_structures/entities/curriculum_structure.entity";
import { Department } from "src/departments/entities/department.entity";
import { Faculty } from "src/faculties/entities/faculty.entity";
import { SubCategory } from "src/sub_categories/entities/sub_category.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";

@Entity()
export class Major {
    @PrimaryColumn()
    majorId: string

    @Column()
    majorNameThai: string

    @Column()
    majorNameEng: string

    @ManyToOne(() => Faculty, (faculty) => faculty.majorIds)
    facId: Faculty

    @ManyToOne(() => Department, (department) => department.majorIds)
    deptId: Department

    @OneToMany(() => Course, (course) => course.majorId)
    courses: Course[]

    @OneToMany(() => CurriculumStructure, (curriculum_structure) => curriculum_structure.majorId)
    curriculumStructureIds: CurriculumStructure[]

    @OneToMany(() => SubCategory, (sub_category) => sub_category.majorId)
    subCategoryIds: SubCategory[]

}