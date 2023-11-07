import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
export const locales = ['en', 'es'];
export const localesWithLabels = [
  { locale: 'en', label: 'English' },
  { locale: 'es', label: 'Español' },
];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as string)) notFound();

  return {
    messages: (await import(`./messages/${locale}.json`)).default
  };
});