import { cookies } from "next/headers";

export default function VercelIP() {
    const store = cookies();
    const ip = store.get("ip")?.value;
    const country = store.get("country")?.value;
    if ( !ip || !country ) return <span>Vercel: ??</span>;
    return (
        <span>Vercel: {ip} {country}</span>
    )
}