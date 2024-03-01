// database.module.ts
import { Module, DynamicModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { getAppDBConfig } from '../config/db.config';

@Module({})
export class DatabaseModule {
  static forApp(appName: string): DynamicModule {
    const { uri, dbName } = getAppDBConfig(appName);

    return {
      module: DatabaseModule,
      imports: [
        MongooseModule.forRoot(uri, { dbName }),
      ],
    };
  }
}
