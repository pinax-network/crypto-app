import Home from '@/components/Home'

export default function Page({params}: { params: { locale: string } }) {
  const locale = ["en", "zh", "ko"].includes(params.locale) ? params.locale : 'en';
  return (
    <Home locale={locale} />
  )
}
