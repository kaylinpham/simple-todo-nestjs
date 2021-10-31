import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, ParseUUIDPipe, Post, Put, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateTodoDto, TodoDto, UpdateTodoDto } from './dto/todo.dto';
import { TodoService } from './todo.service';

@ApiTags('todos')
@Controller('todos')
export class TodoController {
    constructor(private readonly todoService: TodoService) { }

    @Get()
    @ApiOkResponse({
        description: "Get todo list successfully.",
        type: TodoDto,
        isArray: true
    })
    async getTodos(): Promise<TodoDto[]> {
        return await this.todoService.getTodos();
    }

    @Get("/:id")
    @ApiOkResponse({
        description: "Get todo by id successfully.",
        type: TodoDto
    })
    @ApiNotFoundResponse({ description: 'Not found id' })
    async getTodoById(@Param("id", new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST })) id: string): Promise<TodoDto> {
        const todo = await this.todoService.getTodoById(id)

        if (!todo) throw new NotFoundException()

        return todo;
    }

    @Post()
    async createTodo(@Body() body: CreateTodoDto): Promise<TodoDto> {
        return await this.todoService.createTodo(body);
    }

    @Put("/:id")
    async updateTodoById(@Param("id") id: string, @Body() body: UpdateTodoDto): Promise<TodoDto> {
        return await this.todoService.updateTodoById(id, body);
    }

    @Delete("/:id")
    async removeTodoById(@Param("id") id: string): Promise<TodoDto> {
        return await this.todoService.removeTodoById(id);
    }
}
