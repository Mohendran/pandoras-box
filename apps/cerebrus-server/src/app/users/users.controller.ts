import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';

import { User } from '@pandoras-box/types';

import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async addUser(@Body() user: User): Promise<User> {
    return await this.usersService.addUser(user);
  }

  @Get()
  async getUsers(): Promise<User[]> {
    return await this.usersService.getUsers();
  }

  @Get(':id')
  async getByUsersId(@Param('id') id: string): Promise<User> {
    return await this.usersService.getUserById(id);
  }

  @Get(':firstName')
  async getByFirstName(@Param('firstName') firstName): Promise<User> {
    return await this.usersService.getUserByFirstName(firstName);
  }

  @Post('update')
  async getById(@Body() user): Promise<User> {
    return await this.usersService.updateUserById(user);
  }

  @Delete('delete/:id')
  async deleteById(@Param('id') id: string): Promise<User> {
    return await this.usersService.deleteById(id);
  }


}
