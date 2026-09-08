"use client";
import Link from "next/link";
import logo from "../../assets/icons/ghalya-logo.png";
import { navItems } from "../data/ghalyaData";

export default function Header() {
  return (
    <>
      {/* HEADER */}
      <header className="relative z-100 mx-auto mt-10 flex h-20 w-[calc(100%-2rem)] max-w-140 items-center justify-between md:w-full md:max-w-162.5">
        {/* HEADER BACKGROUND / BORDER */}
        <div className="absolute inset-0 rounded-[84px] border border-white bg-white/5 backdrop-blur-[75px] backdrop-brightness-100" />
        {/* CONTENT */}
        <div className="relative z-10 flex h-full w-full items-center justify-between px-4 md:px-8">
          {/* LOGO */}
          <div className="w-10 sm:w-12.5 lg:w-15">
            <Link
              href="/"
              className="block w-10 sm:w-12.5 lg:w-15"
            >
              <img
                src={logo.src}
                alt="Logo"
                className="w-full h-auto object-contain"
              />
            </Link>
          </div>
          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="whitespace-nowrap text-lg font-light text-white hover:opacity-80"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* MOBILE MENU */}
          <div className="md:hidden">
            {/* CHECKBOX */}
            <input
              type="checkbox"
              id="mobile-menu"
              className="peer hidden"
            />
            {/* OPEN BUTTON */}
            <label
              htmlFor="mobile-menu"
              className="relative z-10001 flex h-12 w-12 cursor-pointer items-center justify-center text-3xl text-white"
            >
              ☰
            </label>
            {/* MOBILE OVERLAY */}
            <div className="pointer-events-none fixed inset-0 z-9999 opacity-0 transition-opacity duration-200 peer-checked:pointer-events-auto peer-checked:opacity-100">
              {/* DARK BACKGROUND */}
              <label
                htmlFor="mobile-menu"
                className="absolute inset-0 bg-black/40"
              />
              {/* MENU */}
              <div className="absolute left-1/2 top-24 w-[90%] -translate-x-1/2 rounded-2xl border border-white/20 bg-black p-6 shadow-2xl">
                {/* CLOSE BUTTON */}
                <label
                  htmlFor="mobile-menu"
                  className="ml-auto flex h-12 w-12 cursor-pointer items-center justify-center text-3xl text-white"
                >
                  ✕
                </label>
                {/* NAVIGATION */}
                <nav>
                  <ul className="mt-4 flex flex-col gap-2">
                    {navItems.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="block rounded-xl px-4 py-3 text-lg font-light text-white hover:bg-white/10"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}