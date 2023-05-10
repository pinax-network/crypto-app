import kv from "@vercel/kv"
import { revalidatePath } from "next/cache";

export default async function Button(props: { name: string }) {
  async function increment() {
    'use server';
    await kv.incr(`Button:name:${props.name}`);
    revalidatePath("/");
  }
  const counter = await kv.get<number>(`Button:name:${props.name}`) || 0;

  return (
    <form action={increment}>
        <button className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            {props.name} ({counter})
        </button>
    </form>
  )
}
