import Image from "next/image";
import products from "./data.json";
import React from "react";

function YouMayLike() {
  const renderProductsItems = (products) => {
    return products.map((product) => (
      <article
        key={crypto.randomUUID()}
        className="cursor-pointer flex flex-col items-center justify-between py-2 px-2 rounded-[13px] transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-100 hover:shadow-lg"
      >
        <div>
          <Image
            src={product.src}
            width={175}
            height={165}
            className="rounded-[13px]"
            alt={product.details}
          />
        </div>
        <div className=" text-center">
          <p className="text-[#00140D] font-normal text-sm pt-2">
            {product.details}
          </p>
          <p className="font-medium text-[#FF7E08] leading-7 text-base pt-1">
            {product.prize}
          </p>
          <button className="bg-[#FF7E08] rounded-full px-[20px] py-[7px] text-[#f6f2f4] font-medium mt-[7px] border-[0.5px] border-[#ff7e08] hover:bg-[#f8f8f8] hover:text-[#00140d] hover:border-[0.5px] hover:border-[#ff7e08]">
            Add to cart
          </button>
        </div>
      </article>
    ));
  };

  return (
    <section>
      <div className="col-span-6 h-[0.5px] w-[88%] bg-[#f2f1f0] m-auto mt-7"></div>
      <h3 className="font-semibold text-[#00140D] ml-24 text-base mt-4">
        You may also like
      </h3>
      <section className="grid grid-cols-6 justify-items-center items-center px-[85px] pb-[60px] pt-4 space-y-5">
        <div className="col-span-6 h-[0.5px] w-full bg-[#f2f1f0]"></div>
        {products.map((product, index) => (
          <React.Fragment key={crypto.randomUUID()}>
            {renderProductsItems([product])}
            {index % 6 === 5 && index < products.length - 1 && (
              <div className="col-span-6 h-[0.5px] w-full bg-[#f2f1f0]"></div>
            )}
          </React.Fragment>
        ))}
      </section>
    </section>
  );
}

export default YouMayLike;
