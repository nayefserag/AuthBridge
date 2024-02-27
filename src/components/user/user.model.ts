import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger'; 

@Schema()
export class User extends mongoose.Document {
  @ApiProperty({ required: true }) 
  @Prop({ required: true })
  name: string;

  @ApiProperty({ required: true }) 
  @Prop({ required: true })
  email: string;

  @ApiProperty()
  @Prop()
  password: string;

  @ApiProperty()
  @Prop({ default: '' })
  profilePicture: string;

  @ApiProperty()
  @Prop({ default: '' })
  coverPicture: string;

  @ApiProperty({ type: [String], default: [] })
  @Prop({ type: [String], default: [] })
  followers: string[];

  @ApiProperty({ type: [String], default: [] })
  @Prop({ type: [String], default: [] })
  followings: string[];

  @ApiProperty({ default: false })
  @Prop({ default: false })
  isAdmin: boolean;

  @ApiProperty()
  @Prop({ default: '' })
  description: string;

  @ApiProperty({ maxLength: 50 }) 
  @Prop({ maxlength: 50 })
  city: string;

  @ApiProperty({ maxLength: 50 }) 
  @Prop({ maxlength: 50 })
  from: string;

  @ApiProperty({ enum: [1, 2, 3] })
  @Prop({ enum: [1, 2, 3] })
  relationship: number;

  @ApiProperty()
  @Prop()
  fcmToken: string;

  @ApiProperty()
  @Prop({ default: '' })
  googleId: string;

  @ApiProperty()
  @Prop({ default: '' })
  refreshToken: string;

  @ApiProperty({ default: false })
  @Prop({ default: false })
  isVerified: boolean;

  @ApiProperty()
  @Prop({ default: '' })
  otp: string;

  @ApiProperty()
  @Prop({ default: '' })
  id: string;

  @ApiProperty({ default: false })
  @Prop({ default: false })
  isTwoFactorEnabled: boolean;

  @ApiProperty()
  @Prop()
  twoFactorMethod: string;

  @ApiProperty()
  @Prop()
  twoFactorSecret: string;

  @ApiProperty()
  @Prop({ type: Map, of: String })
  socialLinks: Map<string, string>;


  @ApiProperty({ default: true })
  @Prop({ default: true })
  isActive: boolean;

  @ApiProperty()
  @Prop()
  lastLogin: Date;

  @ApiProperty()
  @Prop({ default: 0 })
  loginAttempts: number;

  @ApiProperty()
  @Prop()
  lockUntil: Date;

  @ApiProperty()
  @Prop()
  language: string;

  @ApiProperty()
  @Prop()
  timezone: string;

  @ApiProperty()
  @Prop({ type: Object })
  privacySettings: {
    profileVisibility: string;
    messagePrivacy: string;
  };

  @ApiProperty({ default: false })
  @Prop({ default: false })
  isAccessibilityModeEnabled: boolean;

  @ApiProperty({ default: false })
  @Prop({ default: false })
  consentToDataProcessing: boolean;

  @ApiProperty({ default: false })
  @Prop({ default: false })
  consentToMarketing: boolean;

  @ApiProperty()
  @Prop({ type: Map, of: String })
  customFields: Map<string, string>;

  @ApiProperty()
  @Prop({ type: Object })
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
