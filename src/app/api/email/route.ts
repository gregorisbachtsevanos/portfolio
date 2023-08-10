import { EmailProps } from '@/types';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { name, email, content }: Partial<EmailProps> = await request.json();
  console.log(name, email, content);
  return NextResponse.json({ name, email, content });
}
