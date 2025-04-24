"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Me", path: "/about" },
  { name: "My Projects", path: "/projects" },
  { name: "Tech Stack", path: "/stack" },
  { name: "Contact Me", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 h-16    z-[500000000000] !w-screen !bg-gradient-to-r !from-slate-100 !to-white shadow-md ">
        <div className="max-w-7xl mx-auto px-4 h-full">
          <div className="flex items-center justify-end h-full">
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={` font-bold transition-all  duration-200 ${
                    pathname === link.path
                      ? "text-black"
                      : "text-slate-500 hover:text-slate-700 hover:scale-105"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
