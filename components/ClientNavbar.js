"use client";

import { useState, useEffect } from "react";
import { Sun, Moon, Search } from "lucide-react";
import Link from "next/link";
import Logo_black from "@/app/assets/images/logo_black.png";
import Logo_white from "@/app/assets/images/logo_white.png";
import { useThemeStore } from "@/store/themeChange";
export default function ClientNavbar() {
  const darkMode = useThemeStore((state) => state.darkMode);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16 bg-white dark:bg-gray-900 transition-colors duration-300 ">
      <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
        <div className="flex gap-5 items-center font-semibold">
          {darkMode ? (
            <img src={Logo_white.src} alt="Logo" />
          ) : (
            <img src={Logo_black.src} alt="Logo" />
          )}
        </div>
        <div className="flex gap-5 items-center mr-5 ">
          <Link href="/">Home</Link>
          <Link href="/write">Write a Blog</Link>
          <Link href="/myblogs">My Blog</Link>
          <Link href="/contacts">Contacts</Link>
          <div className="relative w-full max-w-[200px]">
            <form
              action="/action_page.php"
              className={`rounded-md ${darkMode ? "bg-black" : "bg-white"}`}
            >
              <input
                type="text"
                placeholder="Search..."
                name="search"
                className="w-full pl-4 pr-10 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2  bg-inherit text-black dark:text-white"
              />
              <Search
                size={16}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 dark:text-gray-300"
              />
            </form>
          </div>

          <label
            htmlFor="toggleThree"
            className="flex items-center cursor-pointer select-none text-dark "
          >
            <div className="relative">
              <input
                type="checkbox"
                id="toggleThree"
                className="peer sr-only"
                onChange={toggleTheme}
              />
              <div className="block h-8 rounded-full bg-gray-300 dark:bg-dark-200 w-14"></div>
              <div className="absolute flex items-center justify-center w-6 h-6 transition bg-white rounded-full dot dark:bg-dark-5 left-1 top-1 peer-checked:translate-x-full peer-checked:bg-primary">
                {darkMode ? (
                  <Moon size={16} className="text-black" />
                ) : (
                  <Sun size={16} className="text-black" />
                )}
              </div>
            </div>
          </label>
          <button className="px-3 py-1 border rounded hover:bg-gray-200 dark:hover:bg-gray-700 bg-black text-white">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}
