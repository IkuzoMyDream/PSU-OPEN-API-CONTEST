import { SubCurriculumStructure } from "src/sub_curriculum_structure/entities/sub_curriculum_structure.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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
    // @OneToMany(() => SubCurriculumStructure, (subcurriculumstructure) => subcurriculumstructure.curriculumStructure)
    // generalEduSubjGrp1subCurriculumStructures: SubCurriculumStructure[]
    @ManyToMany(() => SubCurriculumStructure)
    @JoinTable()
    generalEduSubjGrp1subCurriculumStructures: SubCurriculumStructure[]



    @Column({ nullable: false })
    generalEduSubjGrp2AmountCredit: string
    // @OneToMany(() => SubCurriculumStructure, (subcurriculumstructure) => subcurriculumstructure.curriculumStructure)
    // generalEduSubjGrp2subCurriculumStructures: SubCurriculumStructure[]
    @ManyToMany(() => SubCurriculumStructure)
    @JoinTable()
    generalEduSubjGrp2subCurriculumStructures: SubCurriculumStructure[]



    @Column({ nullable: false })
    generalEduSubjGrp3AmountCredit: string
    // @OneToMany(() => SubCurriculumStructure, (subcurriculumstructure) => subcurriculumstructure.curriculumStructure)
    // generalEduSubjGrp3subCurriculumStructures: SubCurriculumStructure[]
    @ManyToMany(() => SubCurriculumStructure)
    @JoinTable()
    generalEduSubjGrp3subCurriculumStructures: SubCurriculumStructure[]



    @Column({ nullable: false })
    generalEduSubjGrp4AmountCredit: string
    // @OneToMany(() => SubCurriculumStructure, (subcurriculumstructure) => subcurriculumstructure.curriculumStructure)
    // generalEduSubjGrp4subCurriculumStructures: SubCurriculumStructure[]
    @ManyToMany(() => SubCurriculumStructure)
    @JoinTable()
    generalEduSubjGrp4subCurriculumStructures: SubCurriculumStructure[]



    @Column({ nullable: false })
    generalEduSubjGrp5AmountCredit: string
    // @OneToMany(() => SubCurriculumStructure, (subcurriculumstructure) => subcurriculumstructure.curriculumStructure)
    // generalEduSubjGrp5subCurriculumStructures: SubCurriculumStructure[]
    @ManyToMany(() => SubCurriculumStructure)
    @JoinTable()
    generalEduSubjGrp5subCurriculumStructures: SubCurriculumStructure[]



    @Column({ nullable: false })
    generalEduSubjGrp6AmountCredit: string
    // @OneToMany(() => SubCurriculumStructure, (subcurriculumstructure) => subcurriculumstructure.curriculumStructure)
    // generalEduSubjGrp6subCurriculumStructures: SubCurriculumStructure[]
    @ManyToMany(() => SubCurriculumStructure)
    @JoinTable()
    generalEduSubjGrp6subCurriculumStructures: SubCurriculumStructure[]



    @Column({ nullable: false })
    generalEduSubjGrp7AmountCredit: string
    // @OneToMany(() => SubCurriculumStructure, (subcurriculumstructure) => subcurriculumstructure.curriculumStructure)
    // generalEduSubjGrp7subCurriculumStructures: SubCurriculumStructure[]
    @ManyToMany(() => SubCurriculumStructure)
    @JoinTable()
    generalEduSubjGrp7subCurriculumStructures: SubCurriculumStructure[]



    @Column({ nullable: true })
    professionBasicAmountCredit: string
    // @OneToMany(() => SubCurriculumStructure, (subcurriculumstructure) => subcurriculumstructure.curriculumStructure)
    // professionBasicsubCurriculumStructures: SubCurriculumStructure[]
    @ManyToMany(() => SubCurriculumStructure)
    @JoinTable()
    professionBasicsubCurriculumStructures: SubCurriculumStructure[]
    


    @Column({ nullable: false })
    professionAmountCredit: string
    // @OneToMany(() => SubCurriculumStructure, (subcurriculumstructure) => subcurriculumstructure.curriculumStructure)
    // professionsubCurriculumStructures: SubCurriculumStructure[]
    @ManyToMany(() => SubCurriculumStructure)
    @JoinTable()
    professionsubCurriculumStructures: SubCurriculumStructure[]
}
