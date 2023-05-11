import { Inter } from 'next/font/google'
import '@/app/globals.css'
import { Locale, defaultLocale, locales } from '@/i18n-config'

const inter = Inter({ subsets: ['latin'] })

interface I18n {
  [locale: string]: {
    title: string,
    description: string,
  }
}

const i18n: I18n = {
  en: {
    title: "What's my Team?",
    description: "Select your team and find out who you are!",
  },
  ko: {
    title: "내 팀은 무엇입니까?",
    description: "팀을 선택하고 누구인지 알아보세요!",
  },
  zh: {
    title: "我的团队是什么？",
    description: "选择您的团队并找出您是谁！",
  }
}

export function generateMetadata({params}: { params: { locale: Locale } }) {
  const locale = locales.includes(params.locale) ? params.locale : defaultLocale;
  return {
    title: i18n[locale].title,
    description: i18n[locale].description,
    openGraph: {
      type: 'website',
      locale,
      title: i18n[locale].title,
      description: i18n[locale].description,
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
