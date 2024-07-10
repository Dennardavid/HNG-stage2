import Image from "next/image";
import Toggle from "./toggle";
import React from "react";

const AddressSection = () => (
  <div className="flex flex-col gap-3 pb-2 border-b-[0.5px] border-b-[#f2f1f0]">
    <div className="pt-3 pb-2 border-b-[0.5px] border-b-[#f2f1f0]">
      <h3 className="font-semibold text-lg">Delivery Details</h3>
    </div>
    <div className="flex justify-between py-1 mt-[-10px]">
      <p className="text-sm">Customer Address</p>
      <p className="text-sm text-[#FF7E08] hover:cursor-pointer mr-3">Edit</p>
    </div>
    <div className="flex flex-col gap-1">
      <p className="font-normal text-[20px]">Yayra Ajilore</p>
      <p className="text-base font-light text-[#6D6D6D]">
        Full Address goes here with state | +234 123 456 7890
      </p>
    </div>
  </div>
);

const DeliverySection = () => (
  <div className="flex flex-col gap-3 pb-2 border-b-[0.5px] border-b-[#f2f1f0]">
    <div className="flex justify-between pt-1">
      <p className="text-sm">Delivery Mode</p>
      <p className="text-sm text-[#FF7E08] hover:cursor-pointer mr-3">Edit</p>
    </div>
    <div className="flex flex-col gap-1">
      <p className="font-normal text-[20px]">Door Delivery</p>
      <p className="text-base font-light text-[#6D6D6D]">
        Delivery between 11 July and 12 July.
      </p>
    </div>
  </div>
);

const CardDetailsSection = () => (
  <div className="pt-3 mx-3 lg:mx-[-1px]">
    <div className="border-b-[0.5px] border-b-[#f2f1f0] pb-2">
      <label htmlFor="card">Card Number</label>
      <br />
      <div className="flex items-center gap-3 mt-3">
        <Image src="/card.svg" width={24} height={24} alt="Card Icon" />
        <input
          type="number"
          id="card"
          placeholder="0001 1234 3421 8745"
          className="focus:outline-none w-[200px]"
        />
      </div>
    </div>

    <div className="mt-8 flex justify-between items-center gap-3 border-b-[0.5px] border-b-[#f2f1f0] pb-2">
      <div>
        <label htmlFor="date">Valid Till</label>
        <br />
        <div className="flex items-center gap-3 mt-3">
          <Image src="/card.svg" width={24} height={24} alt="Card Icon" />
          <input
            type="date"
            id="date"
            placeholder="09/2029"
            className="focus:outline-none w-[200px]"
          />
        </div>
      </div>

      <div className="mr-6 mt-1">
        <label htmlFor="CVV">CVV</label>
        <br />
        <div className="flex gap-3 mt-3">
          <Image src="/card.svg" width={24} height={24} alt="Card Icon" />
          <input
            type="number"
            id="CVV"
            placeholder="123"
            className="focus:outline-none w-[70px] lg:w-[200px]"
          />
        </div>
      </div>
    </div>
    <div className="flex justify-between pt-5 mr-6">
      <p className="font-normal text-sm">Remember this card next time</p>
      <Toggle />
    </div>
  </div>
);

const OrderSummarySection = () => (
  <div className="pt-3">
    <div className="px-2 pb-2 border-b-[0.5px] border-b-[#f2f1f0]">
      <h3 className="font-semibold text-lg">Order Summary</h3>
    </div>
    <div className="flex justify-between pb-[14.5px] border-b-[0.5px] border-b-[#f2f1f0] px-3">
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
    <div>
      <div className="flex justify-between pb-3 pt-3 px-3">
        <p>Total</p>
        <p className="text-[#FF7E08] font-medium text-base">$124.74</p>
      </div>
      <div className="flex justify-center items-center mt-5">
        <button className="bg-[#FF7E08] rounded-full text-white py-4 w-[80%] font-semibold m-auto border-[0.5px] border-[#ff7e08] hover:text-[#00140d] hover:border-[0.5px] hover:border-[#ff7e08] hover:bg-[#f8f8f8]">
          Checkout
        </button>
      </div>
    </div>
  </div>
);

const CheckoutDetails = () => (
  <section className="lg:flex lg:justify-between lg:px-24">
    <div className="hidden lg:block lg:w-[70%] lg:border-r-[0.5px] lg:border-r-[#f2f1f0]">
      <div className="hidden lg:pt-3 lg:pb-2 lg:border-b-[0.5px] lg:border-b-[#f2f1f0]">
        <h3 className="font-semibold text-lg">Delivery Details</h3>
      </div>
      <AddressSection />
      <DeliverySection />
      <CardDetailsSection />
    </div>
    <div className="hidden lg:block lg:w-[30%]">
      <OrderSummarySection />
    </div>

    {/* Mobile */}
    <div className="m-auto lg:hidden pt-3 w-[100%]">
      <CardDetailsSection />
      <div className="flex justify-center items-center mt-[50px] lg:mt-5">
        <button className="bg-[#FF7E08] rounded-full text-white py-4 w-[80%] font-semibold m-auto border-[0.5px] border-[#ff7e08] hover:text-[#00140d] hover:border-[0.5px] hover:border-[#ff7e08] hover:bg-[#f8f8f8]">
          Checkout
        </button>
      </div>
    </div>
  </section>
);

export default CheckoutDetails;
