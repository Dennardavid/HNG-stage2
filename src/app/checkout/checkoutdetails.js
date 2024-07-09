import Image from "next/image";

function CheckoutDetails() {
  return (
    <section className="flex justify-between px-24">
      <div className="w-[70%] border-r-[0.5px] border-r-[#0000004d] ">
        <div className="pt-3 pb-2 border-b-[0.5px] border-b-[#0000004d]">
          <h3 className="font-semibold text-lg">Delivery Details</h3>
        </div>
        <div className="flex flex-col gap-3 pb-2 border-b-[0.5px] border-b-[#0000004d]">
          <div className="flex justify-between py-1">
            <p className="text-sm ">Customer Address</p>
            <p className="text-sm text-[#FF7E08] hover:cursor-pointer mr-3">
              Edit
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-normal text-[20px]">Yayra Ajilore</p>
            <p className="text-base font-light text-[#6D6D6D]">
              Full Address goes here with state | +234 123 456 7890
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pb-2 border-b-[0.5px] border-b-[#0000004d]">
          <div className="flex justify-between">
            <p className="text-sm">Delivery Mode</p>
            <p className="text-sm text-[#FF7E08] hover:cursor-pointer mr-3">
              Edit
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-normal text-[20px]">Door Delivery</p>
            <p className="text-base font-light text-[#6D6D6D]">
              Delivery between 11 July and 12 July.
            </p>
          </div>
        </div>

        <div>
          <h2>Card Number</h2>
          <div>
            <Image src="/card.svg" width={24} height={24} />
            <label for="card">Card Number</label>
            <br />
            <input type="text" id="card" placeholder="0001 1234 3421 8745" />
          </div>

          <div>
            <Image src="/card.svg" width={24} height={24} />
            <label for="date">Valid Till</label>
            <br />
            <input type="text" id="date" placeholder="09/2029" />

            <div>
              <Image src="/card.svg" width={24} height={24} />
              <label for="CVV">CVV</label>
              <br />
              <input type="text" id="CVV" placeholder="123" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-green-400 w-[30%]">
        <div className="pt-3 pb-2 border-b-[0.5px] border-b-[#0000004d]">
          <h3 className="font-semibold text-lg">Order Summary</h3>
        </div>
        <div className=" flex justify-between pb-2 border-b-[0.5px] border-b-[#0000004d]">
          <div className="flex flex-col gap-2 pt-1">
            <p>item</p>
            <p>Delivery Fees</p>
            <p>Discount</p>
          </div>
          <div className="font-normal text-base">
            <p>$121.52</p>
            <p>2.22</p>
            <p>$1.00</p>
          </div>
        </div>
        <div>
          <div className="flex justify-between pb-2">
            <p>Total</p>
            <p className="text-[#FF7E08] font-medium text-base">$124.74</p>
          </div>
          <button className="bg-[#FF7E08] rounded-full text-white py-4 w-[80%] font-semibold m-auto">
            Checkout
          </button>
        </div>
      </div>
    </section>
  );
}

export default CheckoutDetails;
