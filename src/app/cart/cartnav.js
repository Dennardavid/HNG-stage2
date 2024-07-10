"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "../globals.css";

function CartNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="lg:px-[100px] lg:py-[15px] lg:border-b-[0.5px] lg:border-b-[#f2f1f0]">
      <nav className="hidden lg:flex items-center justify-between">
        <Link href="/">
          <Image src="/Ruvid_Store_Logo.svg" width={80} height={80} />
        </Link>

        <h1 className="text-[35px] font-medium text-[#00140D]">Cart</h1>
        <div className="flex items-center w-[250px] justify-between">
          <div className="flex  items-center w-[300px] justify-between">
            <div
              className="flex justify-center items-center ml-2 cursor-pointer gap-3 relative"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div>
                <Image
                  src="https://res.cloudinary.com/dsngkhlct/image/upload/v1720540388/profile_owx8pe.svg"
                  width={36}
                  height={36}
                />
              </div>
              <p>Hi, Ebunoluwa</p>
              <span>
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
                <div className="absolute top-12 right-2 w-[150px] bg-[#F2F1F0] rounded-md shadow-md flex flex-col gap-2 z-20">
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

            {/* Cart  */}
            <div>
              <Link href="/cart">
                <Image
                  src="https://res.cloudinary.com/dsngkhlct/image/upload/v1720540360/cart_jesv3q.svg"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <nav className="flex lg:hidden px-2 justify-between pt-3 pb-3">
        <Image src="/prevpage.svg" width={20} height={20} />
        <h1 className="text-[20px] font-medium text-[#00140D] text-center mr-[30%]">
          Cart
        </h1>
      </nav>
    </header>
  );
}

export default CartNavbar;
