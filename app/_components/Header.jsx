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
              pathname === "/encyclopedia"
                ? "active bg-black text-cyber-yellow"
                : ""
            }`}
          >
            <Link href="/encyclopedia">Encyclopedia</Link>
          </li>
          <li
            className={` px-8 py-4 hover:bg-black hover:text-cyber-yellow link ${
              pathname === "/gallery" ? "active bg-black text-cyber-yellow" : ""
            }`}
          >
            <Link href="/gallery">Gallery</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
