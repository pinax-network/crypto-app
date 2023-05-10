import Image from 'next/image'
import Button from '@/components/Button'
import MyIP from '@/components/MyIp'

interface I18n {
    [locale: string]: {
        "select-your-team": string,
        "i-dont-know": string,
    }
}

const i18n: I18n = {
  en: {
    "select-your-team": "Select your team",
    "i-dont-know": "I don't know",
  },
  ko: {
    "select-your-team": "팀을 선택하세요",
    "i-dont-know": "모르겠습니다",
  },
  zh: {
    "select-your-team": "选择您的团队",
    "i-dont-know": "我不知道",
  }
}

export default function Home({locale}: { locale: string}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          { i18n[locale]["select-your-team"] }
        </p>
      </div>

      <div className="relative flex place-items-center before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/pinax.png"
          alt="Pinax Logo"
          width={431}
          height={240}
          priority
        />
      </div>
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
          <Button name=".gems" />
          <Button name="Pinax" />
          <Button name="Nation" />
          <Button name={i18n[locale]["i-dont-know"] } />
      </div>

      <MyIP locale={locale} />
    </main>
  )
}