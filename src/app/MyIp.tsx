// "use client";
// import useSWR from 'swr'
import { cookies } from "next/headers"

async function fetcher() {
    const response = await fetch("https://www.cloudflare.com/cdn-cgi/trace");
    const json = await response.text();
    const lines = json.split('\n');
    const loc = lines.find(line => line.startsWith('loc='))?.split("=")[1];
    const ip = lines.find(line => line.startsWith('ip='))?.split("=")[1];
    return { ip, loc };
}

export default function MyIP() {
    const store = cookies();
    const ip = store.get('ip')?.value || "unknown";
    const country = store.get('country')?.value || "";

    return (
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <p className="fixed right-0 bottom-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-100 lg:p-4 lg:dark:bg-zinc-800/30">
                My IP: {ip} {country}
            </p>
        </div>
    )
}