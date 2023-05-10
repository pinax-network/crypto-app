// "use client";
import { cookies } from "next/headers"
// import { useEffect, useState } from "react";

async function ipFromCloudflare() {
    const response = await fetch("https://www.cloudflare.com/cdn-cgi/trace");
    const json = await response.text();
    const lines = json.split('\n');
    const ip = lines.find(line => line.startsWith('ip='))?.split("=")[1];
    return ip;
}

async function ipFromIpify() {
    const response = await fetch("https://api.ipify.org?format=json");
    const json = await response.json();
    return json.ip;
}

async function ipFromAWS() {
    const response = await fetch("https://checkip.amazonaws.com");
    const ip = await response.text();
    return ip;
}

function ipFromCookies() {
    const store = cookies();
    return store.get('ip')?.value;
}

export default function MyIP() {
    // const [ip, setIp] = useState<string>("unknown");
    // useEffect(() => {
    //     setIp(ipFromCookies() ?? "unknown");
    // }, []);
    const ip = ipFromCookies() ?? "unknown";
    return (
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <p className="fixed right-0 bottom-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-100 lg:p-4 lg:dark:bg-zinc-800/30">
                My IP: {ip}
            </p>
        </div>
    )
}