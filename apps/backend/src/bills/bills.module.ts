import { Module } from '@nestjs/common';
import { BillsController } from './bills.controller';
import { BillsService } from './bills.service';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [BillsController],
  providers: [BillsService],
})
export class BillsModule {}
