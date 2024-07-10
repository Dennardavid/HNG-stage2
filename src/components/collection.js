import products from "./data.json";
import Image from "next/image";
import React from "react";

function Collection() {
  const renderProductsItems = (products) => {
    return products.map((product) => (
      <article
        key={crypto.randomUUID()}
        className="cursor-pointer flex flex-col items-center justify-between py-2 rounded-[13px] transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-100 hover:shadow-lg"
      >
        <div className="relative">
          <div className="hover-heart absolute top-2 right-5"></div>
          <Image
            src={product.src}
            width={175}
            height={165}
            className="rounded-[13px]"
            alt={product.details}
          />
        </div>
        <div className="w-[90%] text-center">
          <p className="text-[#00140D] font-normal text-sm pt-2">
            {product.details}
          </p>
          <p className="font-medium text-[#FF7E08] leading-7 text-base pt-1">
            {product.prize}
          </p>
          <button className="bg-[#FF7E08] rounded-full px-[20px] py-[7px] text-[#f6f2f4] border-[0.5px] border-[#ff7e08] hover:text-[#00140d] hover:border-[0.5px] hover:border-[#ff7e08] font-medium mt-[7px] hover:bg-[#f8f8f8]">
            Add to cart
          </button>
        </div>
      </article>
    ));
  };

  return (
    <section className="px-3 lg:px-[80px] lg:pb-[60px] lg:pt-5">
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-y-4 gap-x-4">
        <div className="col-span-3 lg:col-span-6 h-[0.5px] bg-[#f2f1f0]"></div>
        {products.map((product, index) => (
          <React.Fragment key={crypto.randomUUID()}>
            {renderProductsItems([product])}
            {index % 3 === 2 && index < products.length - 1 && (
              <div className="col-span-3 lg:col-span-6 h-[0.5px] bg-[#f2f1f0]"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default Collection;
