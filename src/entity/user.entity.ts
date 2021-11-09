import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Todo } from "./todo.entity";

@Entity()
export class AppUser {
    @PrimaryColumn('uuid')
    id: string

    @Column({ unique: true })
    username: string

    @Column()
    password: string

    @OneToMany(type => Todo, todo => todo.user, { cascade: true })
    todos: Todo[]

    @CreateDateColumn()
    createdAt: Date

}
