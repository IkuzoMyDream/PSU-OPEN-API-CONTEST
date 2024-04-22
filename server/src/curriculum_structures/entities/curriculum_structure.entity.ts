import { Department } from "src/departments/entities/department.entity";
import { Faculty } from "src/faculties/entities/faculty.entity";
import { Major } from "src/majors/entities/major.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CurriculumStructure {
    @PrimaryGeneratedColumn()
    curriculumStructureId: string

    @Column('simple-json')
    corriculum_structure: string

    @ManyToOne(() => Faculty, (faculty) => faculty.curriculumStructureIds)
    facId: Faculty

    @ManyToOne(() => Department, (department) => department.curriculumStructureIds)
    deptId: Department

    @ManyToOne(() => Major, (major) => major.curriculumStructureIds)
    majorId: Major

}