import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Invoice, Prisma } from '@prisma/client';

@Injectable()
export class InvoicesService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.InvoiceCreateInput): Promise<Invoice> {
    const createdInvoice = await this.prisma.invoice.create({ data });
    return createdInvoice;
  }

  async findAll(): Promise<Invoice[]> {
    return this.prisma.invoice.findMany();
  }

  async findOne(id: string): Promise<Invoice> {
    return this.prisma.invoice.findUnique({ where: { id } });
  }

  async delete(id: string) {
    const deletedInvoice = await this.prisma.invoice.delete({ where: { id } });
    return deletedInvoice;
  }
}
