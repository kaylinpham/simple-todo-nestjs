import { ApiExtraModels, ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateTodoDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    title: string;
}

export class UpdateTodoDto {
    @IsOptional()
    @IsString()
    @ApiProperty()
    @ApiProperty({
        required: false,
    })
    title?: string;

    @IsOptional()
    @IsBoolean()
    @ApiProperty({
        required: false,
    })
    completed?: boolean;
}

export class TodoDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    title: string;

    @ApiProperty()
    completed: boolean;
}
