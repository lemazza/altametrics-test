import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Bill, Prisma } from '@prisma/client';

@Injectable()
export class BillsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.BillCreateInput): Promise<Bill> {
    const createdBill = await this.prisma.bill.create({ data });
    return createdBill;
  }

  async findAll(): Promise<Bill[]> {
    return this.prisma.bill.findMany();
  }

  async findOne(id: string): Promise<Bill> {
    return await this.prisma.bill.findUnique({ where: { id } });
  }

  async delete(id: string) {
    const deletedBill = await this.prisma.bill.delete({ where: { id } });
    return deletedBill;
  }
}
