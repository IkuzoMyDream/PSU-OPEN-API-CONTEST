import { Column, Entity } from "typeorm";

@Entity()
export class Student {
    @Column({ unique: true })
    studentId: string
    titleNameThai: string 
    titleShortEng: string
    studNameThai: string
    studNameEng: string
    studSnameThai: string
    studSnameEng: string
    studyLevelName: string
    majorNameThai : string
    majorNameEng : string
    campusNameThai: string
    campusNameEng: string
    facNameThai: string
    facNameEng: string
    yearStatus: string
    admitYear: string
}
