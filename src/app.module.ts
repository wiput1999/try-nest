import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { User } from './user.model'
import { UsersModule } from './users.module'

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '',
      database: 'test_nestjs',
      models: [User],
      autoLoadModels: true,
      synchronize: true,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
