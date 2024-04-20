import { Course } from "src/courses/entities/course.entity";
import { CurriculumStructure } from "src/curriculum_structure/entities/curriculum_structure.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SubCurriculumStructure {
    @PrimaryGeneratedColumn()
    id: string

    @Column({ nullable: false })
    name: string

    @OneToMany(() => Course, (course) => course.subCurriculumStructure)
    courses: Course[]

    @ManyToOne(() => CurriculumStructure, (curriculumstructure) => curriculumstructure.generalEduSubjGrp1subCurriculumStructures)
    curriculumStructure: CurriculumStructure

}
