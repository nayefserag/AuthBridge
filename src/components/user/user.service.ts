import mongoose from 'mongoose';
import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import { Password } from 'src/helpers/password.helpers';
import { UserRepository } from './user.repo';
import { CreateUserDto } from '../../dtos/user.dto';
@Injectable()
export class UserService {
  constructor(
    private readonly userRepo: UserRepository
    ) { }

  async create(user): Promise<CreateUserDto> {
    let newUser = await this.userRepo.createUser(user)
    if (!user.password) {
      newUser.name = user.name.firstName + ' ' + user.name.lastName;
      newUser.isVerified = true
      newUser.profilePicture = user.picture

    }
    else {
      newUser.password = await Password.hashPassword(newUser.password)
    }
    newUser = await this.userRepo.createUser(user)
    return newUser;
  }
  async update(user: User): Promise<CreateUserDto> {
    const user2 = await this.userRepo.findByIdAndUpdate(user._id, user);
    return user2
  }

  async findAll(): Promise<CreateUserDto[]> {
    return await this.userRepo.findAll();
  }
  async findUser(email?: string | null): Promise<CreateUserDto | null> {
    const user = await this.userRepo.getUserByEmail(
      {email}
    );
    return user;

  }
  async findUserById(id: string | null): Promise<Error | CreateUserDto> {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return new Error('Invalid ObjectId');
    }
    else {

      const targetUser = await this.userRepo.findById(id);
      return targetUser;

    }
  }
  async updateUser(data: any, id: string): Promise<CreateUserDto | Error> {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return new Error('Invalid ObjectId');
    }
    else {
      const targetUser = await this.userRepo.findByIdAndUpdate(id, data);
      return targetUser
    }
  }

  async updateToken(id: string, newRefreshToken: string): Promise<CreateUserDto | null | void> {
    await this.userRepo.findByIdAndUpdate(id, { refreshToken: newRefreshToken });
  }


  async googleLogin(req) {
    if (!req.user) {
      return 'No user from google';
    }
    else {
      return { massege: 'user from google', user: req.user };
    }
  }

}