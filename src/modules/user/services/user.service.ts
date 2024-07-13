import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '@module/user/entities/user.entity';
import { UserRepository } from '@module/user/repositories/user.repository';
import { CreateUserServiceDto } from '../dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserServiceDto: CreateUserServiceDto): Promise<User> {
    return this.userRepository.create(createUserServiceDto);
  }

  async findOne(param: string | Record<string, any>): Promise<User> {
    return this.userRepository.findOne(param);
  }

  async findOneOrFail(param: string): Promise<User> {
    const user = await this.userRepository.findOne(param);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }
}
