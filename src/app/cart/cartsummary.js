import Image from "next/image";
import Link from "next/link";

function CartSummary() {
  return (
    <section className="flex justify-between px-24">
      <div className="w-[65%] border-r-[0.5px] border-r-[#f2f1f0]">
        <div className=" pt-3 pb-2 border-b-[0.5px] border-b-[#f2f1f0]">
          <p className="text-base font-semibold text-[#00140D]">Cart (2)</p>
        </div>

        {/* Product details */}
        <div className="flex justify-between pt-4">
          <div className="flex gap-3 items-center">
            <Image src="/3.svg" width={121} height={114} />
            <div className="flex flex-col gap-3">
              <p className="text-base w-[70%]">N°5 Eau de Parfum Spray</p>
              <p className="text-xs">In stock</p>
              <div className="flex gap-2 cursor-pointer w-[40%]">
                <Image src="/remove.svg" width={10.5} height={13.5} />
                <p className="text-[#FF7E08] text-sm">Remove</p>
              </div>
            </div>
          </div>

          {/* price and quantity */}
          <div className="flex flex-col gap-4 items-center justify-center mr-4">
            <p>$121.52</p>
            <div className="flex gap-2">
              <span className="px-2 bg-[#FF7E08] text-white text-lg flex justify-center items-center cursor-pointer">
                <Image src="/remove2.svg" width={15} height={15} />
              </span>
              <p>1</p>
              <span className="px-2 bg-[#FF7E08] text-white text-lg flex justify-center items-center cursor-pointer">
                <Image src="/add.svg" width={15} height={15} />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-[35%]">
        <div className=" pt-3 pb-2 border-b-[0.5px] border-b-[#f2f1f0]">
          <p className="text-base font-semibold text-[#00140D] ml-5">
            Cart Summary
          </p>
        </div>

        <div className="flex justify-between pt-4 flex-col gap-4">
          <div className="flex justify-between pt-4 pb-2 border-b-[0.5px] border-b-[#f2f1f0] pl-5">
            <p className="text-base font-normal">subtotal</p>
            <p className="text-xl font-medium">$121.52</p>
          </div>
          <Link href="/checkout" className="flex justify-center items-center">
            <button className="bg-[#FF7E08] rounded-full text-white py-4 w-[80%] font-semibold border-[0.5px] border-[#ff7e08] hover:text-[#00140d] hover:border-[0.5px] hover:border-[#ff7e08] hover:bg-[#f8f8f8]">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CartSummary;
