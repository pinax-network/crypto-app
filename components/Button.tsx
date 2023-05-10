import kv from "@vercel/kv";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export async function ButtonCounter(props: { name: string }) {
  const counter = await kv.get<number>(`Button:name:${props.name}`) || 0;
  return (
    <span>({counter})</span>
  )
}

export default function Button(props: { name: string }) {
  const {name} = props;
  async function increment() {
    'use server';
    const store = cookies();
    const country = store.get('country')?.value;
    const ip = store.get('ip')?.value;

    await kv.incr(`Button:name:${name}`);
    if ( country ) await kv.incr(`country:${country}`);
    if ( ip ) await kv.incr(`ip:${ip}`);
    revalidatePath(`/`);
  }

  return (
    <form action={increment}>
        <button className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-400 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            {/* @ts-expect-error Server Component */}
            {name} <ButtonCounter name={name} />
        </button>
    </form>
  )
}
