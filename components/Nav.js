import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-white">
      <ul className="flex justify-between items-center mt-10 pl-6 pr-6 pt-11">
        <li>
          <Link href="/">
            <img src="/logo.svg" className="w-12 h-12" />
          </Link>
        </li>
        <img src="/bars.svg" className="h-6" />
      </ul>
    </nav>
  );
}
