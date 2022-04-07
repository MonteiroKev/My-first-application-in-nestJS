import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://menireo:kba4mo2c@cluster0.3nrna.mongodb.net/test'), UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
