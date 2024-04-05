import {
  Controller,
  Body,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { BillsService } from './bills.service';
import { Bill, Prisma } from '@prisma/client';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('bills')
export class BillsController {
  constructor(private readonly billsService: BillsService) {}

  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() data: Prisma.BillCreateInput) {
    await this.billsService.create(data);
  }

  @UseGuards(AuthGuard)
  @Get()
  async findAll(): Promise<Bill[]> {
    return this.billsService.findAll();
  }
  @UseGuards(AuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Bill> {
    return this.billsService.findOne(id);
  }
  @UseGuards(AuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.billsService.delete(id);
  }
}
