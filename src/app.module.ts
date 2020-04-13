import { Module } from '@nestjs/common'
import { UsersModule } from './users/users.module'
import { SharedModule } from './shared/shared.module'
import { PostsModule } from './posts/posts.module'
import { AppController } from './app/app.controller';

@Module({
  imports: [UsersModule, PostsModule, SharedModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
