import { UsersInfo } from '@/types';
import mongoose, { Document, Model, Schema } from 'mongoose';

interface User extends UsersInfo, Document {}

const UserSchema: Schema<User> = new mongoose.Schema({
  firstName: String,
  lastName: String,
  occupation: String,
  about: { info: String },
  contact: {
    type: Map,
    of: String,
  },
});

const User: Model<User> = mongoose.model<User>('User', UserSchema);

export default User;
