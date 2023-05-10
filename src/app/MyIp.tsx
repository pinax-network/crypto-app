"use client";
import useSwr from "swr"
// import { cookies } from "next/headers"
// import { useRouter } from 'next/navigation'
// import { useEffect, useState } from "react";

async function ipFromCloudflare() {
    const response = await fetch("https://www.cloudflare.com/cdn-cgi/trace");
    const json = await response.text();
    const lines = json.split('\n');
    const ip = lines.find(line => line.startsWith('ip='))?.split("=")[1];
    const loc = lines.find(line => line.startsWith('loc='))?.split("=")[1];
    return {ip, loc, provider: "Cloudflare"};
}

// async function ipFromIpify() {
//     const response = await fetch("https://api.ipify.org?format=json");
//     const json = await response.json();
//     return {ip: json.ip, provider: "ipify"};
// }

async function ipFromAWS() {
    const response = await fetch("https://checkip.amazonaws.com");
    const ip = await response.text();
    return {ip, loc: "", provider: "AWS"};
}

// function ipFromCookies() {
//     const store = cookies();
//     return store.get('ip')?.value;
// }

// function countryFromCookies() {
//     const store = cookies();
//     return store.get('country')?.value;
// }

async function fetcher() {
    const promises = [
        // ipFromAWS(),
        ipFromCloudflare(),
    ];
    return Promise.any(promises);
    // return ips.find(ip => ip !== undefined);
}

export default function MyIP() {
    const {data, error, isLoading} = useSwr("ip", ipFromCloudflare);
    // const ip = ipFromCookies() ?? "unknown";
    // const country = countryFromCookies() ?? "";
    return (
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <p className="fixed right-0 bottom-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-100 lg:p-4 lg:dark:bg-zinc-800/30">
                My IP from {data?.provider ?? ""}
                <br/>{data?.ip ?? "unknown"} {data?.loc ?? ""}
            </p>
        </div>
    )
}