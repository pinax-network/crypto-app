
import kv from "@vercel/kv"
import { revalidatePath } from "next/cache";

export async function ButtonCounter(props: { name: string }) {
  const counter = await kv.get<number>(`Button:name:${props.name}`) || 0;
  return (
    <span>({counter})</span>
  )
}

export default function Button(props: { name: string }) {
  async function increment() {
    'use server';

    await kv.incr(`Button:name:${props.name}`);
    revalidatePath(`/`);
  }

  return (
    <form action={increment}>
        <button className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-400 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            {/* @ts-expect-error Server Component */}
            {props.name} <ButtonCounter name={props.name} />
        </button>
    </form>
  )
}
