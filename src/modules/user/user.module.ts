import { Module } from '@nestjs/common';
import { Broker } from '@broker/broker';
import { UserService } from '@module/user/services/user.service';
import { UserController } from '@module/user/controllers/user.controller';
import { UserRepository } from '@module/user/repositories/user.repository';
import { CreateUserUsecase } from '@module/user/usecases/create-user.usecase';

@Module({
  controllers: [UserController],
  providers: [Broker, CreateUserUsecase, UserService, UserRepository],
})
export class UserModule {}
