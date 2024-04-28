import { Department } from "src/departments/entities/department.entity";
import { Faculty } from "src/faculties/entities/faculty.entity";
import { Major } from "src/majors/entities/major.entity";
import { Student } from "src/students/entities/student.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CurriculumStructure {
    @PrimaryGeneratedColumn()
    curriculumStructureId: string

    @Column('simple-json')
    curriculum_structure: string

    @Column({ nullable: true })
    admitYear:  string
 
    @ManyToOne(() => Faculty, (faculty) => faculty.curriculumStructureIds)
    facId: Faculty

    @ManyToOne(() => Department, (department) => department.curriculumStructureIds)
    deptId: Department

    @ManyToOne(() => Major, (major) => major.curriculumStructureIds)
    majorId: Major

    @OneToMany(() => Student, (student) => student.curriculumStructureId)
    studentIds: Student[]

}