import Image from "next/image";
import Link from "next/link";
import "../globals.css";

function CartNavbar({ heading }) {
  return (
    <header className="px-[100px] py-[15px] border-b-[0.5px] border-b-[#BEC0BF]">
      <nav className="flex items-center justify-between">
        <Link href="/">
          <Image src="/Ruvid_Store_Logo.svg" width={80} height={80} />
        </Link>

        <h1 className="text-[35px] font-medium text-[#00140D]">{heading}</h1>
        <div className="flex items-center w-[250px] justify-between">
          <div className="flex">
            <Image src="/profile.svg" width={36} height={36} />
            <div className="flex justify-center items-center ml-2 cursor-pointer">
              <p>Hi, Ebunoluwa</p>
              <Image src="/Navigation.svg" width={24} height={24} />
            </div>
          </div>

          <div>
            <Link href="/cart">
              <Image
                src="/cart.svg"
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default CartNavbar;
