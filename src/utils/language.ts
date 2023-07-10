import { DEFAULT_LOCALE } from 'src/constants';

export const isValidLocale  = (locale: string = DEFAULT_LOCALE) => ['ru', 'en'].includes(locale);
export const detectLocale = (locale: string = DEFAULT_LOCALE) => (locale === 'en' ? 'en' : DEFAULT_LOCALE);
