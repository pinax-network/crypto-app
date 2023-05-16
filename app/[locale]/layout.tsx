import { Inter } from 'next/font/google'
import '@/app/globals.css'
import { Locale, defaultLocale, locales } from '@/i18n-config'
import t from './layout.i18n'

const inter = Inter({ subsets: ['latin'] })

export function generateMetadata({params}: { params: { locale: Locale } }) {
  const locale = locales.includes(params.locale) ? params.locale : defaultLocale;
  return {
    title: t[locale].title,
    description: t[locale].description,
    openGraph: {
      type: 'website',
      locale,
      title: t[locale].title,
      description: t[locale].description,
      images: [
        "/team-building.png"
      ]
    }
  }
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode,
  params: { locale: Locale },
}) {
  const locale = locales.includes(params.locale) ? params.locale : defaultLocale;
  return (
    <html lang={locale}>
      <body className={inter.className}>{children}</body>
    </html>
    
  )
}
