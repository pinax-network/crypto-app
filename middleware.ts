import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const response = NextResponse.next();
  const country = req.geo?.country?.toLowerCase() || 'us'
  const ip = req.ip || '';
  if ( ip ) {
    response.headers.set('ip', ip);
    response.cookies.set('ip', ip);
  }
  if ( country ) {
    response.headers.set('country', country);
    response.cookies.set('country', country);
  }
  return response;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/',
};