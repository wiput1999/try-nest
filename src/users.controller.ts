import {
  Controller,
  Get,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common'
import { UsersService } from './users.service'
import { User } from './user.model'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers(): Promise<User[]> {
    return this.usersService.findAll()
  }

  @Get(':id')
  async getUserById(@Param() params): Promise<User> {
    const user = await this.usersService.findOne(params.id)

    if (user) return user
    throw new HttpException('Not Found', HttpStatus.NOT_FOUND)
  }
}
