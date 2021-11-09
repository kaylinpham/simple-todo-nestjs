import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { AppUser } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto, LoginUserDto } from './dto/create-user.dto';
import { v4 as uuid } from "uuid"
import * as _ from "lodash"

@Injectable()
export class UserService {
  constructor(@Inject('USER_REPOSITORY') private userRepository: Repository<AppUser>) { }

  async create(createUserDto: CreateUserDto) {
    const newUser = { id: uuid(), ...createUserDto }

    const result = await this.userRepository.save(newUser);
    return _.pick(result, ['id', 'username'])
  }

  async findAll() {
    const users = await this.userRepository.find()

    return _.map(users, user => _.pick(user, ['id', 'username']));
  }

  async findOne(id: string) {
    const user = await this.userRepository.findOne(id);

    if (!user) throw new NotFoundException()

    return _.pick(user, ['id', 'username'])
  }

  async remove(id: string) {
    const user = await this.userRepository.findOne(id)

    if (!user) throw new NotFoundException()

    const result = await this.userRepository.remove(user);

    return _.pick(result, ['id', 'username'])
  }

  async auth(payload: LoginUserDto) {
    const result = await this.userRepository.find({ username: payload.username, password: payload.password })

    if (result.length == 0) throw new NotFoundException()

    return _.pick(result[0], ['id', 'username']);
  }
}
