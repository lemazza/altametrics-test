import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './create-user.dto';
import { User, UserDocument, UserSchema } from '../schemas/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserDocument> {
    const createdUser = await this.userModel.create(createUserDto);
    // hash password
    const salt = await bcrypt.genSalt(10);
    createdUser.password = await bcrypt.hash(createdUser.password, salt);
    await createdUser.save();
    return createdUser;
  }

  async findAll(): Promise<UserDocument[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: string): Promise<UserDocument> {
    return this.userModel.findById(id).exec();
  }

  async findOneByEmail(email: string): Promise<UserDocument> {
    return this.userModel.findOne({ email }).exec();
  }

  async delete(id: string) {
    const deletedUser = await this.userModel.findByIdAndDelete(id).exec();
    return deletedUser;
  }
}
