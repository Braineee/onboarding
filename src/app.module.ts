import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { RoleModule } from './modules/role/role.module';

@Module({
  imports: [UserModule, RoleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
