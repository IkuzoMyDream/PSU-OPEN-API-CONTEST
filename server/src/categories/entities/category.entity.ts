import { Course } from "src/courses/entities/course.entity";
import { SubCategory } from "src/sub_categories/entities/sub_category.entity";
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

enum CategoryType {
    GENERAL_EDU = "General Education",
    PROFESSION_EDU = "Profession Education",
    FREE_ELECTIVE_EDU = "Free Elective Education"
}

enum GeneralEducationType {
    REQUIRED = "Required",
    ELECTIVE = "Elective"
}

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    catagoryId: string

    @Column({ type: "simple-enum", nullable: false })
    categoryType: CategoryType

    @Column({ type: "simple-enum", nullable: true })
    generalType: GeneralEducationType

    @Column({ nullable: true })
    subjectGroupNumber: string

    @Column({ nullable: true })
    subjectGroupName: string

    @OneToMany(() => Course, (course) => course.category)
    courses: Course[]

    @OneToMany(() => SubCategory, (sub_category) => sub_category.categoryId)
    subCategoryIds: SubCategory[]
}
