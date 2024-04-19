import { Column, Entity, PrimaryColumn } from "typeorm";

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

    @Column({ nullable: false })
    subjectTypeDesc: string
}
