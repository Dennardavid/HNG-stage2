"use client";
import Image from "next/image";
import Link from "next/link";
import "../app/globals.css";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="px-3 py-3 flex flex-col-reverse lg:px-[50px] lg:py-[15px] lg:z-20">
      <nav className="lg:flex lg:items-center lg:justify-around">
        {/* Shop Logo */}
        <Image
          src="https://res.cloudinary.com/dsngkhlct/image/upload/v1720540377/Ruvid_Store_Logo_vdp940.svg"
          width={80}
          height={80}
          className="hidden lg:block lg:cursor-pointer"
        />
        <div className="flex flex-col-reverse gap-2 lg:flex-row lg:gap-44 ">
          <div className="flex p-2 px-3 rounded-full bg-[#F2F1F0] bg">
            <Image
              src="https://res.cloudinary.com/dsngkhlct/image/upload/v1720540379/search_wq6dxd.svg"
              width={24}
              height={24}
              className="mr-2"
            />
            <input
              type="text"
              placeholder="What are you looking for"
              className="w-[90%] lg:w-[500px] bg-[#F2F1F0] focus:outline-none "
            />
            <Image
              src="https://res.cloudinary.com/dsngkhlct/image/upload/v1720540360/camera_s6fpfc.svg"
              width={24}
              height={24}
              className="mr-2 ml-2 cursor-pointer"
            />
            <Image
              src="https://res.cloudinary.com/dsngkhlct/image/upload/v1720540362/filter_vq9v6o.svg"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </div>
          <div className="flex  items-center w-full justify-between ">
            <div
              className="flex justify-between items-center lg:ml-2 cursor-pointer gap-3  w-full"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="flex items-center gap-2 relative">
                <div>
                  <Image
                    src="https://res.cloudinary.com/dsngkhlct/image/upload/v1720540388/profile_owx8pe.svg"
                    width={36}
                    height={36}
                  />
                </div>
                <p>Hi, Ebunoluwa</p>
                <span className="hidden lg:block">
                  {isOpen ? (
                    <Image
                      src="https://res.cloudinary.com/dsngkhlct/image/upload/v1720540372/Navigation2_ok6uhp.svg"
                      width={24}
                      height={24}
                    />
                  ) : (
                    <Image
                      src="https://res.cloudinary.com/dsngkhlct/image/upload/v1720540370/Navigation_scinpl.svg"
                      width={24}
                      height={24}
                    />
                  )}
                </span>
                {/* Drop down menu */}
                {isOpen && (
                  <div className="hidden absolute top-12 right-2 w-[150px] bg-[#F2F1F0] rounded-md shadow-md lg:flex flex-col gap-2 z-20">
                    <Link
                      href={"/"}
                      className="hover:bg-[#FF7E08] p-2 hover:text-[#f2f1f0] rounded-t-md"
                    >
                      Explore
                    </Link>
                    <Link
                      href={"/cart"}
                      className="hover:bg-[#FF7E08] p-2 hover:text-[#f2f1f0]"
                    >
                      Cart
                    </Link>
                    <Link
                      href={"/"}
                      className="hover:bg-[#FF7E08] p-2 hover:text-[#f2f1f0] rounded-b-md"
                    >
                      Wishlist
                    </Link>
                  </div>
                )}
              </div>

              <div className="flex gap-2   right-[-80%] ">
                <Link href="/cart">
                  <Image
                    src="https://res.cloudinary.com/dsngkhlct/image/upload/v1720540360/cart_jesv3q.svg"
                    width={24}
                    height={24}
                  />
                </Link>
                <Link href="/" className="lg:hidden">
                  <Image
                    src="https://res.cloudinary.com/dsngkhlct/image/upload/v1720630967/Frame_74_jvr6lg.svg"
                    width={24}
                    height={24}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
