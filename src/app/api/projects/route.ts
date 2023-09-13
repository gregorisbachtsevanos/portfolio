import clientPromise from '@/app/lib/mongoDB';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const client = await clientPromise;
  const db = client?.db('portfolio');
  const projects = await db.collection('projects').find().toArray();
  return NextResponse.json(projects);
}
