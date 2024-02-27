import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './components/user/user.module';
import { MailerService } from './service/mailer/mailer.service';
import { MailerModule } from './service/mailer/mailer.module';
import { JwtService } from './service/jwt/jwt.service';
import { JwtModule } from './service/jwt/jwt.module';
import { OtpService } from './service/otp/otp.service';
import { GoogleAuthService } from './config/google-auth.config';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URL),
    PassportModule.register({ defaultStrategy: 'google' }),
    UserModule,
    MailerModule,
    JwtModule,

  ],
  controllers: [],
  providers: [ MailerService, JwtService, OtpService, GoogleAuthService],
})
export class AppModule { }
