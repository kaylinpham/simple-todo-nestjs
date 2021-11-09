import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { AppUser } from "./user.entity";

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
    completed: boolean;

    @ManyToOne(type => AppUser, user => user.todos)
    user: AppUser

    @Column({ type: 'uuid' })
    userId: string

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}