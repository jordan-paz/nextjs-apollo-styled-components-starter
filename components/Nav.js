import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <ul className="flex justify-between mt-10 ml-7 mr-7">
        <li>
          <Link href="/">
            <img src="/logo.svg" className="w-12 h-12" />
          </Link>
        </li>
        <div>Bars</div>
      </ul>
    </nav>
  );
}
