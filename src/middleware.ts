import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    console.log(request.geo);
    console.log(request.ip);
    const response = NextResponse.next();
    if ( request.ip ) response.cookies.set('ip', request.ip);
    if ( request.geo?.country ) response.cookies.set('geo', JSON.stringify(request.geo));
    return response;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/',
};