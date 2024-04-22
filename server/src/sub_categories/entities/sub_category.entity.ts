import { Category } from "src/categories/entities/category.entity";
import { Course } from "src/courses/entities/course.entity";
import { Department } from "src/departments/entities/department.entity";
import { Faculty } from "src/faculties/entities/faculty.entity";
import { Major } from "src/majors/entities/major.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SubCategory {
    @PrimaryGeneratedColumn()
    subCategoryId: string

    @Column({ nullable: false })
    subCategoryName: string

    @OneToMany(() => Course, (course) => course.subCategory)
    courses: Course[]

    @ManyToOne(() => Category, (category) => category.subCategoryIds)
    categoryId: Category

    @ManyToOne(() => Faculty, (faculty) => faculty.subCategoryIds)
    facId: Faculty

    @ManyToOne(() => Department, (department) => department.subCategoryIds)
    deptId: Department

    @ManyToOne(() => Major, (major) => major.subCategoryIds)
    majorId: Major

}
