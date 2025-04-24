"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Me", path: "/about" },
  { name: "My Projects", path: "/projects" },
  { name: "Tech Stack", path: "/stack" },
  { name: "Contact Me", path: "/contact" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 flex md:hidden justify-between items-center z-30 h-16 bg-gradient-to-r from-slate-100 to-white shadow-md px-4">
        <button
          onClick={toggleSidebar}
          className="z-40 p-2 rounded-lg bg-transparent shadow-md"
        >
          {isOpen ? (
            <FiX className="w-6 h-6 text-gray-800" />
          ) : (
            <FiMenu className="w-6 h-6 text-gray-800" />
          )}
        </button>
        <Image
          alt="logo"
          src="/logo.svg"
          width={100}
          height={20}
          className="mr-4"
        />
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-r from-slate-100 to-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="pt-24">
          <Image
            alt="logo"
            className="w-full px-20 h-auto mx-auto"
            src="/logo.svg"
            width={100}
            height={40}
          />
        </div>
        <div className="flex flex-col h-full pt-8 px-4">
          <div className="flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3 my-2 px-5 rounded-xl font-bold transition-all duration-200 ${
                  pathname === link.path
                    ? "text-black bg-slate-300"
                    : "text-slate-500 hover:bg-slate-200 hover:text-slate-700 hover:scale-105"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-20 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
