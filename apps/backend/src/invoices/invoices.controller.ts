import {
  Controller,
  Body,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { CreateInvoiceDto } from './create-invoice.dto';
import { Invoice } from '../schemas/invoice.schema';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('invoices')
export class InvoicesController {
  constructor(private readonly invoicesService: InvoicesService) {}

  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() createInvoiceDto: CreateInvoiceDto) {
    await this.invoicesService.create(createInvoiceDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  async findAll(): Promise<Invoice[]> {
    return this.invoicesService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Invoice> {
    return this.invoicesService.findOne(id);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.invoicesService.delete(id);
  }
}
