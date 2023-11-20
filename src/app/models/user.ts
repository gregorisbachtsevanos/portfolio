import mongoose, { Document, Model, Schema } from 'mongoose';

import { UsersInfo } from '@/types';

interface User extends UsersInfo, Document {}

const UserSchema: Schema<User> = new mongoose.Schema({
  firstName: String,
  lastName: String,
  image: String,
  occupation: String,
  about: { info: String },
  contact: {
    type: Map,
    of: String,
  },
});

const User: Model<User> = mongoose.model<User>('User', UserSchema);

export default User;
