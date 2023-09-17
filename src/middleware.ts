import { NextResponse, type NextRequest } from 'next/server';
import { config as settings } from './config';

const corsOptions: {
  allowedMethods: string[];
  allowedOrigins: string[];
  allowedHeaders: string[];
  exposedHeaders: string[];
  maxAge?: number;
  credentials: boolean;
} = {
  allowedMethods: (settings.cors.method as string).split(','),
  allowedOrigins: (settings.cors.origin as string).split(','),
  allowedHeaders: (settings.cors.allowedHeaders as string).split(','),
  exposedHeaders: (settings.cors.exposedHeaders as string).split(','),
  maxAge: (settings.cors.maxAge && parseInt(settings.cors.maxAge)) || undefined, // 60 * 60 * 24 * 30, // 30 days
  credentials: settings.cors.credentials == 'true',
};

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  // Response
  const response = NextResponse.next();

  // Allowed origins check
  const origin = request.headers.get('origin') as string;

  if (corsOptions.allowedOrigins.includes('*') || corsOptions.allowedOrigins.includes(origin))
    response.headers.set('Access-Control-Allow-Origin', origin);

  response.headers.set('Access-Control-Allow-Origin', '*');
  // Set default CORS headers
  response.headers.set('Access-Control-Allow-Credentials', corsOptions.credentials.toString());
  response.headers.set('Access-Control-Allow-Methods', corsOptions.allowedMethods.join(','));
  response.headers.set('Access-Control-Allow-Headers', corsOptions.allowedHeaders.join(','));
  response.headers.set('Access-Control-Expose-Headers', corsOptions.exposedHeaders.join(','));
  response.headers.set('Access-Control-Max-Age', corsOptions.maxAge?.toString() ?? '');

  // Return
  return response;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/api/:path*',
};
