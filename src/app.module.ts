import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [
    CatsModule,
    MongooseModule.forRoot("mongodb+srv://ushkov:ushkovmongo@ushkov-clouds.izwualg.mongodb.net/?retryWrites=true&w=majority"),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
