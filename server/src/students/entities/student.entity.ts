import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Student {
    @PrimaryColumn({ unique: true })
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
