import { Controller, Get, HttpStatus, Param, ParseUUIDPipe } from '@nestjs/common';
import { TodoService } from 'src/todo/todo.service';

@Controller('users/:userId/todos')
export class TodoUserController {
    constructor(private readonly todoService: TodoService) { }

    @Get()
    async getTodos(@Param('userId', new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST })) userId: string) {
        return await this.todoService.getTodosByUserId(userId)
    }
}
