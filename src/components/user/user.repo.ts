import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from    '../../dtos/user.dto';   
import { User, UserDocument } from './user.model';
import { UserUpdates } from 'src/dtos/update-user.dto';
@Injectable()
export class UserRepository {
    constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) { }

  async createUser(user: CreateUserDto): Promise<CreateUserDto> {
    const newUser = await this.userModel.create(user);
    return newUser;
  }

  async getUserByEmail({
    email
  }: {
    email: string;
  }): Promise<CreateUserDto | null> {
    const user = await this.userModel.findOne({ email });
    return user;
  }
  async updateUser({
    user,
  }: {
    user: CreateUserDto;
  }): Promise<CreateUserDto | null> {
    const updatedUser = await this.userModel.findOneAndUpdate(
      { email: user.email },
      user,
      { new: true },
    );
    return updatedUser;
  }

  async findByIdAndUpdate(id: string, user: UserUpdates): Promise<CreateUserDto | null> {
    const updatedUser = await this.userModel.findOneAndUpdate(
      { _id: id },
      user,
      { new: true },
    )
    return updatedUser
  }
  async deleteUser(email: string): Promise<boolean> {
    await this.userModel.deleteOne({ email });
    return true;
  }

  async findAll(): Promise<CreateUserDto[]> {
    return await this.userModel.find().exec();
  }

  async findById(id: string): Promise<CreateUserDto | null> {
    return await this.userModel.findById(id).exec();
  }



}