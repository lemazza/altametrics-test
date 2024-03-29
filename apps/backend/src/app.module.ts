import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BillsModule } from './bills/bills.module';
import { InvoicesModule } from './invoices/invoices.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'frontend', 'dist'),
    }),
    ConfigModule.forRoot({ isGlobal: true }), // allows to use .env file
    MongooseModule.forRoot(process.env.MONGODB_URI), // connect to MongoDB
    BillsModule,
    InvoicesModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
