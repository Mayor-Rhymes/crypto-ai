import { cn } from "@/lib/utils";
import Link from "next/link";

export default function NavMenu() {
  return (
    <nav className="h-[90px] flex items-center px-4">
      <Link href="/"><p className="grow font-bold">JusticeAI</p></Link>

      <ul className="list-none flex grow-[2] justify-evenly text-sm">
        <li>
          <Link href="/" className="hover:underline hover:underline-offset-2 transition">Home</Link>
        </li>
        <li>
          <Link href="" className="hover:underline hover:underline-offset-2 transition">About</Link>
        </li>
        <li>
          <Link href="" className="hover:underline hover:underline-offset-2 transition">Community</Link>
        </li>
        <li>
          <Link href="" className="hover:underline hover:underline-offset-2 transition">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
