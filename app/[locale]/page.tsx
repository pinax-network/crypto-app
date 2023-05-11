import Home from '@/components/Home'
import { locales, defaultLocale, Locale } from '@/i18n-config'

export default function Page({params}: { params: { locale: Locale } }) {
  const locale = locales.includes(params.locale) ? params.locale : defaultLocale;
  return (
    <Home locale={locale} />
  )
}
