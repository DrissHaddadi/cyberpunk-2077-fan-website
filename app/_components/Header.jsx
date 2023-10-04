"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className=" p-4 bg-black text-white">
      <nav className="  text-xl font-blender_pro_book font-medium p-4flex justify-center">
        <ul className="flex justify-center h-auto uppercase ">
          <li
            className={` px-8 py-4 hover:text-cyber-blue link ${
              pathname === "/" ? " active  text-cyber-blue" : ""
            }`}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={` px-8 py-4 hover:text-cyber-blue link  ${
              pathname === "/database" ? " active text-cyber-blue" : ""
            }`}
          >
            <Link href="/database">Database</Link>
          </li>
          <li
            className={` px-8 py-4 hover:text-cyber-blue link ${
              pathname === "/gallery" ? " active text-cyber-blue " : ""
            }`}
          >
            <Link href="/gallery">Gallery</Link>
          </li>
        </ul>
      </nav>
      <p className=" text-center font-blender_pro_book">
        Unofficial Cyberpunk 2077 website
      </p>
    </header>
  );
};

export default Header;
