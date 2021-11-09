import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    username: string

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    password: string
}

export class LoginUserDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    username: string

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    password: string
}