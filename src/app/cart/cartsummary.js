import Image from "next/image";
import Link from "next/link";

function CartSummary() {
  return (
    <section className="px-3 lg:flex lg:justify-between lg:px-24">
      <div className="lg:w-[65%] lg:border-r-[0.5px] lg:border-r-[#f2f1f0]">
        <div className=" pt-3 pb-2 lg:border-b-[0.5px] lg:border-b-[#f2f1f0]">
          <p className="hidden lg:block lg:text-base lg:font-semibold lg:text-[#00140D]">
            Cart (2)
          </p>
        </div>

        {/* Product details */}
        <div className="flex justify-between lg:pt-4">
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
          <div className="flex flex-col gap-7 lg:gap-4 items-center justify-center lg:mr-4">
            <p>$121.52</p>
            <p className="text-xs line-through text-[#bec0bf]">$150.12</p>
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
      <div className=" lg:w-[35%]">
        <div className="pt-5 lg:hidden pb-2 border-b-[0.5px] border-b-[#f2f1f0] ">
          <p className="font-semibold lg:hidden text-lg lg:text-base text-[#00140D] lg:ml-5">
            Cart Summary
          </p>
        </div>

        <div className="flex justify-between pt-4 flex-col gap-4">
          <div className=" flex lg:hidden justify-between lg:justify-between pt-2 pb-4 lg:pt-4 lg:pb-2 border-b-[0.5px] border-b-[#f2f1f0] lg:pl-5">
            <p className="text-base font-normal">subtotal</p>
            <p className="text-xl font-medium">$121.52</p>
          </div>
          <div>
            <div>
              <div>
                <div className="pb-2 lg:pb-1 border-b-[0.5px] border-b-[#f2f1f0] lg:pl-3 ">
                  <h3 className="font-semibold text-lg lg:text-base">
                    Order Summary
                  </h3>
                </div>
                <div className="flex justify-between pb-[14.5px] border-b-[0.5px] border-b-[#f2f1f0] lg:pl-3 ">
                  <div className="flex flex-col gap-2 pt-1">
                    <p>Item</p>
                    <p>Delivery Fees</p>
                    <p>Discount</p>
                  </div>
                  <div className="font-normal text-base flex flex-col gap-2 pt-1">
                    <p>$121.52</p>
                    <p>$2.22</p>
                    <p>$1.00</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between pb-3 pt-3 lg:pl-3">
                <p>Total</p>
                <p className="text-[#FF7E08] font-medium text-xl">$124.74</p>
              </div>
            </div>
          </div>
          <Link
            href="/checkout"
            className="flex justify-center items-center mt-3 lg:mt-0"
          >
            <button className="bg-[#FF7E08] rounded-full text-white py-4 w-[90%] lg:w-[80%] font-semibold border-[0.5px] border-[#ff7e08] hover:text-[#00140d] hover:border-[0.5px] hover:border-[#ff7e08] hover:bg-[#f8f8f8]">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CartSummary;
