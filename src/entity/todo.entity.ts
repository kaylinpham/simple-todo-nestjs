import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Todo {
    @PrimaryColumn('uuid')
    id: string

    @Column({ type: "nvarchar", width: 100 })
    title: string

    // @Column({ type: "tinyint", width: 1 })
    // completed: boolean
    @Column({
        default: false,
    })
    public completed: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}