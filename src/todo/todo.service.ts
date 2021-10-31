import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';

import { v4 as uuid } from "uuid"
import { CreateTodoDto, TodoDto, UpdateTodoDto } from './dto/todo.dto';
import { Todo } from './entity/todo.entity';

@Injectable()
export class TodoService {
    constructor(@Inject('TODO_REPOSITORY') private todoRepository: Repository<Todo>) { }

    async getTodos(): Promise<TodoDto[]> {
        return this.todoRepository.find();
    }

    async getTodoById(id: string): Promise<TodoDto> {
        return this.todoRepository.findOne(id);
    }

    async createTodo(payload: CreateTodoDto): Promise<TodoDto> {
        const newTodo = { id: uuid(), ...payload, completed: false };
        return this.todoRepository.save(newTodo);;
    }

    async updateTodoById(id: string, payload: UpdateTodoDto): Promise<TodoDto> {
        const todo = await this.todoRepository.findOne(id);

        if (todo) Object.assign(todo, payload);

        return this.todoRepository.save(todo);;
    }

    async removeTodoById(id: string): Promise<TodoDto> {
        const todo = await this.todoRepository.findOne(id);

        return this.todoRepository.remove(todo);
    }
}
