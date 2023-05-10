import Home from '@/components/Home'
import { notFound } from "next/navigation"
import config from "../../next.config"

export default function Page({params}: { params: { locale: string } }) {
  config?.i18n?.locales.includes(params.locale) || notFound();
  return (
    <Home locale={params.locale} />
  )
}
