import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateInvoiceDto } from './create-invoice.dto';
import { Invoice } from '../schemas/invoice.schema';

@Injectable()
export class InvoicesService {
  constructor(
    @InjectModel(Invoice.name) private readonly invoiceModel: Model<Invoice>,
  ) {}

  async create(createInvoiceDto: CreateInvoiceDto): Promise<Invoice> {
    const createdInvoice = await this.invoiceModel.create(createInvoiceDto);
    return createdInvoice;
  }

  async findAll(): Promise<Invoice[]> {
    return this.invoiceModel
      .find()
      .populate({ path: 'user_id', select: 'name id _id' })
      .exec();
  }

  async findOne(id: string): Promise<Invoice> {
    return this.invoiceModel
      .findById(id)
      .populate({ path: 'user_id', select: 'name id _id' })
      .exec();
  }

  async delete(id: string) {
    const deletedInvoice = await this.invoiceModel.findByIdAndDelete(id).exec();
    return deletedInvoice;
  }
}
