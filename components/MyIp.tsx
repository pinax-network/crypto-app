"use client";
import useSwr from "swr"

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

async function ipFromCloudflare() {
    const response = await fetch("https://www.cloudflare.com/cdn-cgi/trace");
    const json = await response.text();
    const lines = json.split('\n');
    const ip = lines.find(line => line.startsWith('ip='))?.split("=")[1];
    const loc = lines.find(line => line.startsWith('loc='))?.split("=")[1];
    return {ip, loc, provider: "Cloudflare"};
}

export default function MyIP({locale}: { locale: string }) {
    const { data } = useSwr("ip", ipFromCloudflare);
    const ip = data?.ip ?? i18n[locale].unknown;
    const country = data?.loc ?? "";
    const provider = data?.provider ?? "";
    return (
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <p className="fixed right-0 bottom-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-100 lg:p-4 lg:dark:bg-zinc-800/30">
                {i18n[locale]["my-ip-from"]} {provider}
                <br/>{ip} {country}
            </p>
        </div>
    )
}