import { NextRequest, NextResponse } from 'next/server';
import { match } from '@formatjs/intl-localematcher'
import { i18n } from './i18n-config'

function getLocale( request: NextRequest ) {
  const locale = request.headers.get('accept-language')?.split(',').map((l) => l.split(';')[0]);
  return match(locale ?? [], i18n.locales as any, i18n.defaultLocale);
}

export default async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const response = NextResponse.next();

  // Add IP & Country to cookies
  const country = request.geo?.country?.toLowerCase() || 'us'
  const ip = request.ip || '';
  response.cookies.set('ip', ip);
  response.cookies.set('country', country);

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url))
  }
}

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
