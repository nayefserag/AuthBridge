import { Module } from '@nestjs/common';
import { JwtController } from './jwt.controller';
import { UserService } from 'src/components/user/user.service';
import { JwtService } from './jwt.service';
import { User, UserSchema } from 'src/components/user/user.model';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from 'src/components/user/user.module';
import { UserRepository } from 'src/components/user/user.repo';

@Module({
  imports:
    [
      MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
      UserModule
    ],
  providers: [JwtService, UserService,UserRepository],
  controllers: [JwtController]
})
export class JwtModule { }
