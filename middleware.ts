import { NextRequest, NextResponse } from 'next/server';
import { match } from '@formatjs/intl-localematcher'
import { i18n } from './i18n-config'

function getLocale( request: NextRequest ) {
  const current = request.cookies.get('NEXT_LOCALE');
  if ( current ) return current.value;
  const locale = request.headers.get('accept-language')?.split(',').map((l) => l.split(';')[0]);
  return match(locale ?? [], i18n.locales as any, i18n.defaultLocale);
}

function setCookies( response: NextResponse, ip: string, country: string, locale: string ) {
  response.cookies.set('ip', ip);
  response.cookies.set('country', country);
  response.cookies.set("NEXT_LOCALE", locale);
}

export default async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  // const response = NextResponse.next();

  // Add IP & Country to cookies
  const country = request.geo?.country?.toLowerCase() || '';
  const ip = request.ip || '';

  // Check if there is any supported locale in the pathname
  const pathnameLocale = i18n.locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  const locale = getLocale(request)

  // Redirect if there is no locale
  if (!pathnameLocale) {
    const response = NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url))
    setCookies(response, ip, country, locale);
    return response;
  } else {
    const response = NextResponse.next()
    setCookies(response, ip, country, pathnameLocale);
    return response;
  }
}

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
