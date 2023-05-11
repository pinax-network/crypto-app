import kv from "@vercel/kv";
import { increment } from "./Button.actions";

export async function ButtonCounter(props: { name: string }) {
  const counter = await kv.get<number>(`Button:name:${props.name}`) || 0;
  return (
    <span>({counter})</span>
  )
}

export default function Button(props: { name: string }) {
  const {name} = props;
  return (
    <form action={increment}>
      <input type="text" id="name" name="name" value={name} hidden={true} readOnly />
      <button type="submit" className="mb-2 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-400 hover:bg-gray-200 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          {/* @ts-expect-error Server Component */}
          {name} <ButtonCounter name={name} />
      </button>
    </form>
  )
}
