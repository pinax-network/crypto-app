import { Locale } from "@/i18n-config";
import CloudFlareIp from "./CloudflareIP";
import VercelIP from "./VercelIP";
import t from "./MyIp.i18n";

export default function MyIP({ locale }: { locale: Locale }) {
    return (
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <p className="fixed right-0 bottom-0 w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-100 lg:p-4 lg:dark:bg-zinc-800/30">
                {t[locale]["my-ip-from"]}<br />
                <CloudFlareIp /><br />
                <VercelIP />
            </p>
        </div>
    )
}