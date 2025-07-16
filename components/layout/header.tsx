"use client";

import Link from "next/link";
import React, { useState } from "react";

function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <header className="border-[#CDCBCB] border-b ">
        <div className="flex justify-between items-center px-4 py-2 md:px-12 md:py-4">
          <div>
            <div>
              <Link href={"/"}>
                <img
                  src="/logo.png"
                  alt="Crowd Image"
                  className="h-12 md:h-16 transition delay-150 duration-300 hover:scale-105"
                />
              </Link>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href={"/services"}>Services</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/works"}>Works</Link>
            <Link href={"/contact"}>Contact</Link>

            <button className="bg-primary rounded-4xl px-5 py-2.5 text-white">
              Get Started
            </button>
          </nav>
          <div className="block md:hidden">
            <button onClick={() => setToggle(!toggle)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="17"
                fill="none"
                viewBox="0 0 17 13"
              >
                <path
                  stroke="#FC6A03"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.313"
                  d="M1.281 1.25H15.72M1.28 6.5H15.72M1.28 11.75H15.72"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
      {toggle && <div className="absolute top-20 left-0 right-0">
        <nav className="bg-white flex flex-col gap-4 shadow-2xl p-4">
          <Link href={"/services"}>Services</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/works"}>Works</Link>
          <Link href={"/contact"}>Contact</Link>
          <button className="bg-primary rounded-4xl px-5 py-2.5 text-white mt-2">
            Get Started
          </button>
        </nav>
      </div>}
    </>
  );
}

export default Header;
