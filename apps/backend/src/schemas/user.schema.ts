import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as bcrypt from 'bcrypt';

export type UserDocument = HydratedDocument<User>;

@Schema({
  toJSON: {
    getters: true,
    virtuals: true,
  },
  toObject: {
    getters: true,
    virtuals: true,
  },
})
export class User {
  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  name: string;

  comparePassword: (pwd: string) => Promise<boolean>;
}

const UserSchema = SchemaFactory.createForClass(User);

UserSchema.virtual('bills', {
  ref: 'Bill',
  localField: '_id',
  foreignField: 'user_id',
  justOne: false,
});

UserSchema.virtual('invoices', {
  ref: 'Invoice',
  localField: '_id',
  foreignField: 'user_id',
  justOne: false,
});

UserSchema.methods.comparePassword = async function (
  pwd: string,
): Promise<boolean> {
  return await bcrypt.compare(pwd, this.password);
};

export { UserSchema };
