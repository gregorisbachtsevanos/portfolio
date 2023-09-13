import { Project } from '@/types';
import mongoose, { Document, Model, Schema } from 'mongoose';

interface Projects extends Project, Document {}

const ProjectSchema: Schema<Projects> = new mongoose.Schema({
  title: String,
  link: String,
  images: String,
});

const Projects: Model<Projects> = mongoose.model<Projects>('Projects', ProjectSchema);

export default Projects;
