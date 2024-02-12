import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'hk'],

  // Used when no locale matches
  defaultLocale: 'en',
  localeDetection: true,
  localePrefix: 'always',
  
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(hk|en)/:path*'],
};
