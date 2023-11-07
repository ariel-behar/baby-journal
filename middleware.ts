// import NextAuth from "next-auth"
// import { authConfig } from "./lib/auth.config"

// export default NextAuth(authConfig).auth

// export const config = {
//     matcher: ["/((?!api|static|.*\\..*|_next).*)"],
// }

import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'es'],
 
  // Used when no locale matches
  defaultLocale: 'en',
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(es|en)/:path*']
};