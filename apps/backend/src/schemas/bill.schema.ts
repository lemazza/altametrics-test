import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Date, HydratedDocument } from 'mongoose';
import { User } from './user.schema';

export type BillDocument = HydratedDocument<Bill>;

@Schema()
export class Bill {
  @Prop()
  amount: number;

  @Prop()
  due_date: string;

  @Prop()
  details: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  })
  user_id: User;
}

export const BillSchema = SchemaFactory.createForClass(Bill);
