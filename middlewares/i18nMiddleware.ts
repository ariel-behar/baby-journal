import createMiddleware from 'next-intl/middleware';

import { locales, defaultLocale } from '../i18n';

export const intlMiddleware = createMiddleware({ locales, defaultLocale });