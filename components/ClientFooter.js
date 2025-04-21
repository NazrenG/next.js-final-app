"use client";
import React from "react";
import LogoWhite from "@/app/assets/images/blog_white.png";
import LogoBlack from "@/app/assets/images/blog_black.png";
import Link from "next/link";
import { useThemeStore } from "@/store/themeChange";

export default function ClientFooter() {
  const darkMode = useThemeStore((state) => state.darkMode);

  return (
    <footer className="w-full bg-[#F6F6F7] dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-t">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About */}
        <div className="space-y-4 w-[280px]">
          <h2 className="font-semibold text-lg">About</h2>
          <p className="text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <div className="text-sm space-y-1">
            <p className="text-base">
              <span className="font-semibold text-lg">Email:</span>{" "}
              info@jstemplate.net
            </p>
            <p className="text-base">
              <span className="font-semibold text-lg">Phone:</span> +880 123 456
              789
            </p>
          </div>
        </div>
        {/* Quick Links & Categories */}
        <div className="md:col-span-2 flex justify-end gap-20">
          {/* Quick Links */}
          <div className="text-sm w-[120px]">
            <h2 className="font-semibold text-lg mb-4">Quick Links</h2>
            <ul className="space-y-2 text-base">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/write" className="hover:underline">
                  Write a Blog
                </Link>
              </li>
              <li>
                <Link href="/myblogs" className="hover:underline">
                  My Blog
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="hover:underline">
                  Contacts
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="text-sm w-[120px]">
            <h2 className="font-semibold text-lg mb-4">Categories</h2>
            <ul className="space-y-2 text-base">
              <li>
                <Link href="/" className="hover:underline">
                  Lifestyle
                </Link>
              </li>
              <li>
                <Link href="/write" className="hover:underline">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/myblogs" className="hover:underline">
                  Travel
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="hover:underline">
                  Business
                </Link>
              </li>
              <li>
                <Link href="/myblogs" className="hover:underline">
                  Economy
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="hover:underline">
                  Supports
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-6xl mx-auto border-t border-gray-300 dark:border-gray-700 pt-6 pb-4 flex flex-col md:flex-row items-center justify-between gap-4 px-6">
        <div className="flex items-center gap-3">
          <img
            src={darkMode ? LogoWhite.src : LogoBlack.src}
            alt="Logo"
            className="w-12 h-12"
          />
          <div>
            <p className="text-xl font-normal ">
              Meta<span className="text-xl font-extrabold">Blog</span>
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              © JS Template 2023. All rights reserved.
            </p>
          </div>
        </div>

        <div className="text-sm text-right space-x-3">
          <p>
            Terms of Use <span>|</span> Privacy Policy <span>|</span> Cookie
            Policy
          </p>
        </div>
      </div>
    </footer>
  );
}
