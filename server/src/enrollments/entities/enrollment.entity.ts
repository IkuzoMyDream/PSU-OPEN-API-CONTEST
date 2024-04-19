import { Entity, Column } from "typeorm"

@Entity()
export class Enrollments {
    @Column({ unique: true })
    registAmount : string
    registCredit : string
    registType : string
    registTypeDesc : string
    section : string
    shortNameEng : string
    statusDescThai : string
    subjectCode : string
    subjectId : string
    subjectNameEng : string
    subjectNameThai : string
    withdrawalType : string
}