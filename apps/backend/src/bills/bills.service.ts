import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBillDto } from './create-bill.dto';
import { Bill } from '../schemas/bill.schema';

@Injectable()
export class BillsService {
  constructor(
    @InjectModel(Bill.name) private readonly billModel: Model<Bill>,
  ) {}

  async create(createBillDto: CreateBillDto): Promise<Bill> {
    const createdBill = await this.billModel.create(createBillDto);
    return createdBill;
  }

  async findAll(): Promise<Bill[]> {
    return this.billModel
      .find()
      .populate({ path: 'user_id', select: 'name _id' })
      .exec();
  }

  async findOne(id: string): Promise<Bill> {
    return await this.billModel
      .findById(id)
      .populate({ path: 'user_id', select: 'name _id id' })
      .exec();
  }

  async delete(id: string) {
    const deletedBill = await this.billModel.findByIdAndDelete(id).exec();
    return deletedBill;
  }
}
