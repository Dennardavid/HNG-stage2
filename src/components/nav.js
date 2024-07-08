"use client";
import Image from "next/image";
import Link from "next/link";
import "../app/globals.css";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="px-[50px] py-[15px] border-b-[0.5px] border-b-[#0000004d]">
      <nav className="flex items-center justify-around">
        <Image
          src="/Ruvid_Store_Logo.svg"
          width={80}
          height={80}
          className="cursor-pointer"
        />
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

            {isOpen && (
              <div className="absolute top-12 right-2 w-[170px] bg-[#F2F1F0] rounded-md p-2 shadow-md flex flex-col gap-2">
                <Link href={"/"} className="hover:bg-[#FF7E08]">
                  Home
                </Link>
                <Link href={"/"} className="hover:bg-[#FF7E08]">
                  Explore
                </Link>
                <Link href={"/cart"} className="hover:bg-[#FF7E08]">
                  Cart
                </Link>
                <Link href={"/"} className="hover:bg-[#FF7E08]">
                  Wishlist
                </Link>
              </div>
            )}
          </div>

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
