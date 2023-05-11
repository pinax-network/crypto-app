import { Locale } from "@/i18n-config";
import CloudFlareIp from "./CloudflareIP";
import VercelIP from "./VercelIP";

interface I18n {
    [locale: string]: {
        "my-ip-from": string,
        unknown: string,
    }
}

const i18n: I18n = {
    en: {
        "my-ip-from": "My IP from",
        unknown: "unknown",
    },
    ko: {
        "my-ip-from": "내 IP 주소",
        unknown: "알 수 없음",
    },
    zh: {
        "my-ip-from": "我的IP来自",
        unknown: "未知",
    }
}

export default function MyIP({ locale }: { locale: Locale }) {
    return (
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <p className="fixed right-0 bottom-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-100 lg:p-4 lg:dark:bg-zinc-800/30">
                {i18n[locale]["my-ip-from"]}
                <CloudFlareIp />
                <VercelIP />
            </p>
        </div>
    )
}