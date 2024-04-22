import { Category } from "src/categories/entities/category.entity";
import { Department } from "src/departments/entities/department.entity";
import { Faculty } from "src/faculties/entities/faculty.entity";
import { Major } from "src/majors/entities/major.entity";
import { SubCategory } from "src/sub_categories/entities/sub_category.entity";
import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";

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

    @ManyToOne(() => Category, (category) => category.courses)
    category: Category

    @ManyToOne(() => SubCategory, (subcategory) => subcategory.courses)
    subCategory: SubCategory

    @ManyToOne(() => Faculty, (faculty) => faculty.courses)
    facId: Faculty

    @ManyToOne(() => Department, (department) => department.courses)
    deptId: Department

    @ManyToOne(() => Major, (major) => major.courses)
    majorId: Major
}
