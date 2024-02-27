import * as Joi from 'joi';
import { UserValidator } from '../validators/user.validator';
export class  Validator{
public static validate(user: any): Joi.ValidationResult<any> {
    return UserValidator.schema.validate(user);
  }
  public static validateUpdate(user: any): Joi.ValidationResult<any> {
    return UserValidator.schemaUpdate.validate(user);
  }}