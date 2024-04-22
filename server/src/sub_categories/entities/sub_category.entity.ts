import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SubCategory {
    @PrimaryGeneratedColumn()
    id: string

    
}
