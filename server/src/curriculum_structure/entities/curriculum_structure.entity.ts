import { SubCurriculumStructure } from "src/sub_curriculum_structure/entities/sub_curriculum_structure.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CurriculumStructure {
    @PrimaryGeneratedColumn()
    id: string

    @Column({ nullable: false })
    name: string

    @Column({ nullable: false })
    generalEduAmountCredit: string

    @Column({ nullable: false })
    professionEduAmountCredit: string

    @Column({ nullable: false })
    freeElectiveEduAmountCredit: string

    @Column({ nullable: false })
    generalEduSubjGrp1AmountCredit: string

    @OneToMany(() => SubCurriculumStructure, (subcurriculumstructure) => subcurriculumstructure.curriculumStructure)
    generalEduSubjGrp1subCurriculumStructures: SubCurriculumStructure[]


    @Column({ nullable: false })
    generalEduSubjGrp2AmountCredit: string

    @OneToMany(() => SubCurriculumStructure, (subcurriculumstructure) => subcurriculumstructure.curriculumStructure)
    generalEduSubjGrp2subCurriculumStructures: SubCurriculumStructure[]

    @Column({ nullable: false })
    generalEduSubjGrp3AmountCredit: string

    @OneToMany(() => SubCurriculumStructure, (subcurriculumstructure) => subcurriculumstructure.curriculumStructure)
    generalEduSubjGrp3subCurriculumStructures: SubCurriculumStructure[]

    @Column({ nullable: false })
    generalEduSubjGrp4AmountCredit: string

    @OneToMany(() => SubCurriculumStructure, (subcurriculumstructure) => subcurriculumstructure.curriculumStructure)
    generalEduSubjGrp4subCurriculumStructures: SubCurriculumStructure[]

    @Column({ nullable: false })
    generalEduSubjGrp5AmountCredit: string

    @OneToMany(() => SubCurriculumStructure, (subcurriculumstructure) => subcurriculumstructure.curriculumStructure)
    generalEduSubjGrp5subCurriculumStructures: SubCurriculumStructure[]

    @Column({ nullable: false })
    generalEduSubjGrp6AmountCredit: string

    @OneToMany(() => SubCurriculumStructure, (subcurriculumstructure) => subcurriculumstructure.curriculumStructure)
    generalEduSubjGrp6subCurriculumStructures: SubCurriculumStructure[]

    @Column({ nullable: false })
    generalEduSubjGrp7AmountCredit: string

    @OneToMany(() => SubCurriculumStructure, (subcurriculumstructure) => subcurriculumstructure.curriculumStructure)
    generalEduSubjGrp7subCurriculumStructures: SubCurriculumStructure[]

    @Column({ nullable: true })
    professionBasicAmountCredit: string
    
    @OneToMany(() => SubCurriculumStructure, (subcurriculumstructure) => subcurriculumstructure.curriculumStructure)
    professionBasicsubCurriculumStructures: SubCurriculumStructure[]
    
    @Column({ nullable: false })
    professionAmountCredit: string

    @OneToMany(() => SubCurriculumStructure, (subcurriculumstructure) => subcurriculumstructure.curriculumStructure)
    professionsubCurriculumStructures: SubCurriculumStructure[]

}
