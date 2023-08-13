import { EmailProps } from '@/types';
import { sendEmail } from '@/utils/sendEmail';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { subject, html, email } = await request.json();
  await sendEmail(subject, html, email);
  console.log(subject, html, email);
  return NextResponse.json({ subject, html, email });
}
