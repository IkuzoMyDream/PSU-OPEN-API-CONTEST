import { Category } from "src/categories/entities/category.entity";
import { SubCurriculumStructure } from "src/sub_curriculum_structure/entities/sub_curriculum_structure.entity";
import { SubCurriculumStructureController } from "src/sub_curriculum_structure/sub_curriculum_structure.controller";
import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";

@Entity()
export class Course {
    @PrimaryColumn({ unique: true, nullable: false })
    subjectCode: string

    @Column({ nullable: false })
    credit: string

    @Column({ nullable: false })
    totalCredit: string

    @Column({ nullable: false })
    shortNameEng: string

    @Column({ nullable: false })
    subjectNameEng: string

    @Column({ nullable: false })
    subjectNameThai: string

    @ManyToOne(() => Category, (category) => category.courses)
    category: Category

    @ManyToOne(() => SubCurriculumStructure, (subcurriculumstructure) => subcurriculumstructure.courses)
    subCurriculumStructure: SubCurriculumStructure

}
