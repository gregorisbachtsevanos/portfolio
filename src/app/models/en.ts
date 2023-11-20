import mongoose, { Document, Model, Schema } from 'mongoose';

import { UsersInfo } from '@/types';

interface En extends UsersInfo, Document {}

const EnSchema: Schema<En> = new mongoose.Schema({
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

const En: Model<En> = mongoose.model<En>('En', EnSchema);

export default En;
