import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {DataSource} from 'typeorm';
import {ConfigModule, ConfigService} from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { ApiModule } from './api/api.module';

import {join} from 'path';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { MulterModule } from '@nestjs/platform-express';
import { FilesModule } from './files/files.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      // Use useFactory, useClass, or useExisting
      // to configure the DataSourceOptions.
      useFactory: () => ({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'api',
        entities: [join(process.cwd(), 'dist/**/*.entity.js')],
        synchronize: true,
      }),

      // dataSource receives the configured DataSourceOptions
      // and returns a Promise<DataSource>.
      dataSourceFactory: async (options) => {
        const dataSource = await new DataSource(options as any).initialize();
        return dataSource;  
      }
    }),
    MulterModule.register({
      dest: './uploads',
    }),
    FilesModule,
    AuthModule,
    ApiModule,
    UsersModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
