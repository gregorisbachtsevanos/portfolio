import { NextRequest, NextResponse } from 'next/server';

import clientPromise from '@/app/lib/mongoDB';
import En from '@/app/models/en';

export async function GET(request: NextRequest) {
  const client = await clientPromise;
  const db = client?.db('portfolio');
  const user = await db.collection('en').findOne({});
  return NextResponse.json(user);
}
