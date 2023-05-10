import { Inter } from 'next/font/google'
import '@/globals.css'

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
    description: "What's my Team?",
  },
  ko: {
    title: "내 팀은 무엇입니까?",
    description: "내 팀은 무엇입니까?"
  },
  zh: {
    title: "我的团队是什么？",
    description: "我的团队是什么？"
  }
}

export function generateMetadata({params}: { params: { locale: string } }) {
  const locale = ["en", "zh", "ko"].includes(params.locale) ? params.locale : 'en';
  return {
    title: i18n[locale].title,
    description: i18n[locale].description,
  }
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode,
  params: { locale: string },
}) {
  const locale = ["en", "zh", "ko"].includes(params.locale) ? params.locale : 'en';
  return (
    <html lang={locale}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
