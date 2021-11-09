import { Controller, Get, Post, Body, Param, Delete, ParseUUIDPipe, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, LoginUserDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id', new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST })) id: string) {
    return this.userService.findOne(id);
  }

  @Delete('/:id')
  remove(@Param('id', new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST })) id: string) {
    return this.userService.remove(id);
  }

  @Post('/auth')
  auth(@Body() payload: LoginUserDto) {
    return this.userService.auth(payload)
  }
}
