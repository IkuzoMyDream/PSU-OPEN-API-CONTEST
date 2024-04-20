import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

enum CategoryType{
    GENERALEDU = "GeneralEdu"


}

enum GeneralType{

}

enum professionType{

}

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    catagoryId: string

    @Column({type:"simple-enum"})
    categorytype:CategoryType

    @Column({nullable: true })
    subjectGroup: string

    @Column({type:"simple-enum" })
    generalType: GeneralType

    @Column({type:"simple-enum"})
    professionType: professionType






}
