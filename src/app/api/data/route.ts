import { EmailProps } from '@/types';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { name, email }: Partial<EmailProps> = await request.json();
  return NextResponse.json({ name, email });
}
