import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsEmail,
  IsArray,
  IsBoolean,
  IsNumber,
  IsDate,
  IsObject
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  password: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  profilePicture: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  coverPicture: string;
  @ApiProperty()
  @IsOptional()
  @IsArray()
  followers: string[];
  @ApiProperty()
  @IsOptional()
  @IsArray()
  followings: string[];
  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  isAdmin: boolean;
  @ApiProperty()
  @IsOptional()
  @IsString()
  description: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  city: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  from: string;
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  relationship: number;
  @ApiProperty()
  @IsOptional()
  @IsString()
  fcmToken: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  googleId: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  refreshToken: string;
  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  isVerified: boolean;
  @ApiProperty()
  @IsOptional()
  @IsString()
  otp: string;
  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  isTwoFactorEnabled: boolean;
  @ApiProperty()
  @IsOptional()
  @IsString()
  twoFactorMethod: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  twoFactorSecret: string;
  @ApiProperty()
  @IsOptional()
  @IsObject()
  socialLinks: Map<string, string>;
  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  isActive: boolean;
  @ApiProperty()
  @IsOptional()
  @IsDate()
  lastLogin: Date;
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  loginAttempts: number;
  @ApiProperty()
  @IsOptional()
  @IsDate()
  lockUntil: Date;
  @ApiProperty()
  @IsOptional()
  @IsString()
  language: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  timezone: string;
}