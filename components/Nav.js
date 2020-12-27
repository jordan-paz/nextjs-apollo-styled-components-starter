import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-white">
      <ul className="flex justify-between items-center pl-6 pr-6 pt-11">
        <li>
          <Link href="/">
            <img src="/logo.svg" className="w-10" />
          </Link>
        </li>
        <img src="/bars.svg" className="w-9" />
      </ul>
    </nav>
  );
}
