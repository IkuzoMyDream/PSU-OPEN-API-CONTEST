import { Column, Entity, PrimaryColumn } from "typeorm";

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
    majorNameThai : string

    @Column({ nullable: false })
    majorNameEng : string
    
    @Column({ nullable: false })
    campusNameThai: string

    @Column({ nullable: false })
    campusNameEng: string

    @Column({ nullable: false })
    facNameThai: string

    @Column({ nullable: false })
    facNameEng: string

}
