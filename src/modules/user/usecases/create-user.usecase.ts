import { User } from '@module/user/entities/user.entity';
import { UseCase } from '@shared/usecase/base-usecase';
import { UserService } from '../services/user.service';
import { CreateUserUsecaseDto } from '../dto/create-user.dto';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class CreateUserUsecase extends UseCase<User> {
  constructor(private readonly userService: UserService) {
    super();
  }

  async execute(createUserUsecaseDto: CreateUserUsecaseDto): Promise<User> {
    await this.checkIfUserAlreadyExists(createUserUsecaseDto);
    return this.userService.create(createUserUsecaseDto);
  }

  async checkIfUserAlreadyExists(
    createUserUsecaseDto: CreateUserUsecaseDto,
  ): Promise<void> {
    const user = await this.userService.findOne({
      email: createUserUsecaseDto.email,
      phoneNumber: createUserUsecaseDto.phoneNumber,
    });

    if (user) {
      throw new BadRequestException('User already exists');
    }
  }
}
