import { Entity, Column, PrimaryColumn } from "typeorm"

@Entity()
export class Enrollment {
    @PrimaryColumn({ unique: true, nullable: false })
    studentId: string

    @Column({ nullable: false })
    registCredit: string

    @Column({ nullable: false })
    registType: string

    @Column({ nullable: false })
    registTypeDesc: string   

    @Column({ nullable: false })
    section: string

    @Column({ nullable: false })
    statusDescThai: string

    @Column({ nullable: false })
    withdrawalType: string
}