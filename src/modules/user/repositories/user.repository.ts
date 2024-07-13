import { Injectable, Logger } from '@nestjs/common';
import { User, UserModel } from '@module/user/entities/user.entity';
import { BaseRepository } from '@shared/repository/base-repository';

@Injectable()
export class UserRepository extends BaseRepository<User> {
  private logger = new Logger(UserRepository.name);
  private readonly userRepository: typeof UserModel;

  constructor() {
    super();
    this.userRepository = UserModel;
  }

  async create(data: any): Promise<User> {
    return await this.userRepository.create({
      data,
    });
  }

  async update(
    id: string,
    data: Partial<Omit<User, 'id' | 'email'>>,
  ): Promise<User> {
    return await this.userRepository.update({
      where: {
        id,
      },
      data,
    });
  }

  async findOne(param: string | Record<string, any>): Promise<User> {
    let where: Record<string, any> = {};

    if (typeof param === 'string') {
      where = {
        OR: [{ id: param }, { email: param }, { phoneNumber: param }],
      };
    } else {
      where = param;
    }

    return await this.userRepository.findFirst({ where });
  }

  async findAll(filter: Record<string, any>): Promise<User[]> {
    return await this.userRepository.findMany();
  }
}
