import { UsersInfo } from '@/types';
import mongoose, { Document, Model, Schema } from 'mongoose';

interface En extends UsersInfo, Document {}

const EnSchema: Schema<En> = new mongoose.Schema({
  firstName: String,
  lastName: String,
  occupation: String,
  about: { info: String },
  contact: {
    type: Map,
    of: String,
  },
});

const En: Model<En> = mongoose.model<En>('En', EnSchema);

export default En;
