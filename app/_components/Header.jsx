"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname();

  return (
    <header>
      <nav className=" bg-cyber-yellow text-black text-xl font-medium p-8 flex justify-center">
        <ul className="flex justify-center h-auto uppercase border-2 border-black rounded-tl-lg rounded-br-lg">
          <li
            className={` px-8 py-4 hover:bg-black hover:text-cyber-yellow link ${
              pathname === "/" ? "active bg-black text-cyber-yellow" : ""
            }`}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={` px-8 py-4 hover:bg-black hover:text-cyber-yellow link ${
              pathname === "/night-city"
                ? "active bg-black text-cyber-yellow"
                : ""
            }`}
          >
            <Link href="/night-city">Night City</Link>
          </li>
          <li
            className={` px-8 py-4 hover:bg-black hover:text-cyber-yellow link ${
              pathname === "/corporations"
                ? "active bg-black text-cyber-yellow"
                : ""
            }`}
          >
            <Link href="/corporations">Corporations</Link>
          </li>
          <li
            className={` px-8 py-4 hover:bg-black hover:text-cyber-yellow link ${
              pathname === "/gangs" ? "active bg-black text-cyber-yellow" : ""
            }`}
          >
            <Link href="/gangs">Gangs</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
