import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('helicopters')
export class Helicopters {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    manufacturer!: string;

    @Column()
    description!: string;

    @Column()
    price!: number;

    @Column()
    maxSpeed!: number;

    @Column()
    capacity!: number;

    @Column()
    range!: number;

    @Column()
    flightTime!: number;

    @Column()
    previewImage!: string;
    
    @Column()
    modelUrl!: string;
}