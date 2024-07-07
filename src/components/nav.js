import Image from "next/image";
import "../app/globals.css";

function Navbar() {
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

        <div className="flex  items-center w-[300px]">
          <Image src="/profile.svg" width={36} height={36} />
          <div className="flex justify-center items-center ml-2 cursor-pointer">
            <p>Hi, Ebunoluwa</p>
            <Image src="/Navigation.svg" width={24} height={24} />
          </div>

          <div className="flex w-[70px] justify-between ml-14 ">
            <Image
              src="/cart.svg"
              width={24}
              height={24}
              className="cursor-pointer"
            />
            <Image
              src="/heart.svg"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
