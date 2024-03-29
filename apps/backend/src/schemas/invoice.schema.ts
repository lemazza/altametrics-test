import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from './user.schema';

export type InvoiceDocument = HydratedDocument<Invoice>;

@Schema()
export class Invoice {
  @Prop()
  amount: number;

  @Prop()
  due_date: string;

  @Prop()
  details: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user_id: User;
}

export const InvoiceSchema = SchemaFactory.createForClass(Invoice);
