import * as joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CategoryModule } from './category/category.module';
import { MenuItemModule } from './menu-item/menu-item.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: joi.object({
          POSTGRES_HOST: joi.string().required(),
          POSTGRES_PORT: joi.number().required(),
          POSTGRES_USER: joi.string().required(),
          POSTGRES_PASSWORD: joi.string().required(),
          POSTGRES_DB: joi.string().required(),
          PORT: joi.number()
      }),
    }),
    DatabaseModule,
    CategoryModule,
    MenuItemModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
