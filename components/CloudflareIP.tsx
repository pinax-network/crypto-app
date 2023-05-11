"use client";
import useSwr from "swr"

async function ipFromCloudflare() {
    const response = await fetch("https://www.cloudflare.com/cdn-cgi/trace");
    const json = await response.text();
    const lines = json.split('\n');
    const ip = lines.find(line => line.startsWith('ip='))?.split("=")[1];
    const loc = lines.find(line => line.startsWith('loc='))?.split("=")[1];
    return {ip, country: loc};
}

export default function CloudFlareIp() {
    const { data } = useSwr("ip", ipFromCloudflare);
    if ( !data ) return <span>Cloudflare: ??</span>;
    const { country, ip } = data;
    return (
        <span>Cloudflare: {ip} {country}</span>
    )
}