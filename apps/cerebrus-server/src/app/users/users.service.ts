import { Injectable } from '@nestjs/common';
import { User, UserModel } from '@pandoras-box/types';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {

  constructor(@InjectModel('User') private readonly userModel: UserModel) {}

  async addUser(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    await newUser.save();
    return newUser.toObject();
  }

  async getUsers(): Promise<User[]> {
    const usersList = await this.userModel.find();
    return usersList;
  }

  async getUserById(id: string): Promise<User> {
    const user = await this.userModel.findById(id);
    return user;
  }

  async getUserByFirstName(firstName: string): Promise<User> {
    const user = await this.userModel.findOne({ firstName });
    return user;
  }

  async getUsersByLastName(lastName: string): Promise<User> {
    const user =  await this.userModel.findOne({ lastName });
    return user
  }

  async updateUserById(user: User): Promise<User> {
    const updatedUser = await this.userModel.findByIdAndUpdate(user.id, user, (err: any, res: any) => {
      console.log('Hello', res);
    });
    return updatedUser;
  }

  async deleteById(id: string): Promise<User> {
    const deletedUser = await this.userModel.findByIdAndRemove(id);
    return deletedUser;
  }

}
