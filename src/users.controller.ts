import { Controller, Get } from '@nestjs/common'
import { UsersService } from './users.service'
import { User } from './user.model'

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/users')
  getAllUsers(): Promise<User[]> {
    return this.usersService.findAll()
  }
}
