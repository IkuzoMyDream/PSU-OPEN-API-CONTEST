import { Course } from "src/courses/entities/course.entity";
import { CurriculumStructure } from "src/curriculum_structures/entities/curriculum_structure.entity";
import { Faculty } from "src/faculties/entities/faculty.entity";
import { Major } from "src/majors/entities/major.entity";
import { SubCategory } from "src/sub_categories/entities/sub_category.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";

@Entity()
export class Department {
    @PrimaryColumn()
    deptId: string

    @Column()
    deptNameThai: string

    @Column()
    deptNameEng: string

    @ManyToOne(() => Faculty, (faculty) => faculty.deptIds)
    facId: Faculty

    @OneToMany(() => Major, (major) => major.deptId)
    majorIds: Major[]

    @OneToMany(() => Course, (course) => course.deptId)
    courses: Course[]

    @OneToMany(() => CurriculumStructure, (curriculum_structure) => curriculum_structure.deptId)
    curriculumStructureIds: CurriculumStructure[]

    @OneToMany(() => SubCategory, (curriculum_structure) => curriculum_structure.deptId)
    subCategoryIds: SubCategory[]

}
