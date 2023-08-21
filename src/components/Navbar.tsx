import React from "react";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { navItems } from "../Data/Navbar-data";
import Link from "next/link";
import CartButton from "../components/CartButton";
import Hamburger from "../components/Hamburger";
import Providers from "./Provider";

export default async function Navbar() {
  return (
    <>
      <div className=" pt-3 pb-2 px-2 flex justify-between">
        {/* logo */}
        <Link href="/" passHref>
          <div className="py-[0.45rem]">
            <Image
              src="/Logo.png"
              alt="dinemartlogo"
              height={100}
              width={140}
            />
          </div>
        </Link>
        {/* navbar items */}
        <div className="hidden lg:flex justify-between items-center gap-x-20">
          {navItems.map((items: { navList: string; href: string }, i) => {
            return (
              <div
                key={i}
                className="text-md lg:text-md hover:italic hover:scale-105 rounded-md "
              >
                <Link href={items.href} passHref>
                  {items.navList}
                </Link>
              </div>
            );
          })}
        </div>
        {/* search box */}
        <div className="hidden lg:flex justify-center items-center  rounded-lg gap-2 pl-2 relative">
          <FiSearch className="absolute left-4" />
          <input
            type="text"
            className="w-[22rem] h-8 text-sm font-thin border rounded-lg pl-8"
            placeholder="What are you looking for"
          />
        </div>
        {/* cart */}
        <div className="relative">
          <Providers>
            <CartButton />
          </Providers>
        </div>
        {/* Hamburger icon*/}
        <div className="lg:absolute">
          <Providers>
            <Hamburger />
          </Providers>
        </div>
      </div>
    </>
  );
}
