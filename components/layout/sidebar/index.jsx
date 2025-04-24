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
      <div className="w-full flex md:hidden justify-end  h-18">
        <button
          onClick={toggleSidebar}
          className={`md:hidden fixed top-4 ${
            isOpen ? "left-68" : "left-4"
          }  z-50 p-2 transition-all  cursor-pointer duration-300 rounded-lg bg-transparent  shadow-md `}
        >
          {isOpen ? (
            <FiX className="w-6 h-6 text-gray-800 dark:text-white" />
          ) : (
            <FiMenu className="w-6 h-6 text-gray-800 dark:text-white" />
          )}
        </button>
        <Image
          alt="logo"
          className="mx-5"
          src="/logo.svg"
          width={100}
          height={20}
        />
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-64 !bg-gradient-to-r from-slate-100 to-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className=" pt-10">
          <Image
            alt="logo"
            className="w-full px-20  h-auto mx-auto"
            src={"/logo.svg"}
            width={100}
            height={40}
          />
        </div>
        <div className="flex flex-col h-full pt-10 px-4">
          <div className="flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3   my-2 px-5 rounded-xl font-bold transition-all duration-200 ${
                  pathname === link.path
                    ? "text-black bg-slate-300"
                    : "text-slate-500 hover:bg-slate-200 hover:text-slate-700 hover:scale-105 dark:hover:text-slate-700"
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
          className="fixed inset-0 bg-black/60 bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
