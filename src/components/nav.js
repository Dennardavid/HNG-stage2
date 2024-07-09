"use client";
import Image from "next/image";
import Link from "next/link";
import "../app/globals.css";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="px-[50px] py-[15px] border-b-[0.5px] border-b-[#0000004d] z-20">
      <nav className="lg:flex lg:items-center lg:justify-around">
        {/* Shop Logo */}
        <Image
          src="/Ruvid_Store_Logo.svg"
          width={80}
          height={80}
          className="hidden lg:block lg:cursor-pointer"
        />

        {/* Search bar */}
        <div className="flex p-2 px-3 rounded-full bg-[#F2F1F0]">
          <Image src="/search.svg" width={24} height={24} className="mr-2" />
          <input
            type="text"
            placeholder="What are you looking for"
            className="w-[500px] bg-[#F2F1F0] focus:outline-none "
          />
          <Image
            src="/camera.svg"
            width={24}
            height={24}
            className="mr-2 ml-2 cursor-pointer"
          />
          <Image
            src="/filter.svg"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </div>

        {/* Profile and drop down menu  */}
        <div className="flex  items-center w-[300px] justify-between">
          <div
            className="flex justify-center items-center ml-2 cursor-pointer gap-3 relative"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div>
              <Image src="/profile.svg" width={36} height={36} />
            </div>
            <p>Hi, Ebunoluwa</p>
            <span>
              {isOpen ? (
                <Image src="/Navigation2.svg" width={24} height={24} />
              ) : (
                <Image src="/Navigation.svg" width={24} height={24} />
              )}
            </span>

            {/* Drop down menu */}
            {isOpen && (
              <div className="absolute top-12 right-2 w-[170px] bg-[#F2F1F0] rounded-md shadow-md flex flex-col gap-2 z-20">
                <Link href={"/"} className="hover:bg-[#FF7E08] p-2">
                  Home
                </Link>
                <Link href={"/"} className="hover:bg-[#FF7E08] p-2">
                  Explore
                </Link>
                <Link href={"/cart"} className="hover:bg-[#FF7E08] p-2">
                  Cart
                </Link>
                <Link href={"/"} className="hover:bg-[#FF7E08] p-2">
                  Wishlist
                </Link>
              </div>
            )}
          </div>

          {/* Cart  */}
          <div>
            <Link href="/cart">
              <Image src="/cart.svg" width={24} height={24} />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
