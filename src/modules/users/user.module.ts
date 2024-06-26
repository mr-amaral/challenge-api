import { Module } from '@nestjs/common'

import { TypeOrmModule } from '@nestjs/typeorm'

import { Address } from '../address/entities/address.entity'
import { User } from './entities/users.entity'
import { UserService } from './user.service'

@Module({
  imports: [TypeOrmModule.forFeature([User, Address])],
  providers: [UserService],
  exports: [UserService]
})
export class PersonModule {}
