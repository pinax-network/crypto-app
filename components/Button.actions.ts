'use server';

import kv from "@vercel/kv";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export async function increment(formData: FormData) {
    const name = formData.get("name");
    if (!name) throw new Error("Name is required");
    const store = cookies();
    const country = store.get('country')?.value;
    const ip = store.get('ip')?.value;

    await kv.incr(`Button:name:${name}`);
    if ( country ) await kv.incr(`country:${country}`);
    if ( ip ) await kv.incr(`ip:${ip}`);
    revalidatePath(`/`);
}