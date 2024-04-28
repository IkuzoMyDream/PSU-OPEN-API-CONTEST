import { CurriculumStructure } from "src/curriculum_structures/entities/curriculum_structure.entity";
import { Department } from "src/departments/entities/department.entity";
import { Enrollment } from "src/enrollments/entities/enrollment.entity";
import { Faculty } from "src/faculties/entities/faculty.entity";
import { Major } from "src/majors/entities/major.entity";
import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";

@Entity()
export class Student {
    @PrimaryColumn({ unique: true })
    studentId: string

    @Column({ nullable: false })
    titleNameThai: string

    @Column({ nullable: false })
    titleShortEng: string

    @Column({ nullable: false })
    studNameThai: string

    @Column({ nullable: false })
    studNameEng: string

    @Column({ nullable: false })
    studSnameThai: string

    @Column({ nullable: false })
    studSnameEng: string

    @Column({ nullable: false })
    admitYear: string

    @Column({ nullable: false })
    yearStatus: string

    @Column({ nullable: false })
    studyLevelName: string

    @Column({ nullable: false })
    campusNameThai: string

    @Column({ nullable: false })
    campusNameEng: string

    @ManyToOne(() => Faculty, (faculty) => faculty.studentIds)
    facId: Faculty

    @ManyToOne(() => Department, (department) => department.studentIds)
    deptId: Department

    @ManyToOne(() => Major, (major) => major.studentIds)
    majorId: Major

    @ManyToOne(() => CurriculumStructure, (curriculumstructure) => curriculumstructure.studentIds)
    curriculumStructureId: CurriculumStructure

    @Column({ nullable: false })
    estScore: string

    @Column({ nullable: false })
    cumActHour: string

    @OneToMany(() => Enrollment, (enrollment) => enrollment.studentId)
    enrollmentIds: Enrollment[]

}
